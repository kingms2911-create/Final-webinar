import { createHmac } from "node:crypto";
import { deflateSync } from "node:zlib";
import { Buffer } from "node:buffer";

// ---- Agora AccessToken2 (RTC) - no external library needed ----
const u16 = (n) => { const b = Buffer.alloc(2); b.writeUInt16LE(n); return b; };
const u32 = (n) => { const b = Buffer.alloc(4); b.writeUInt32LE(n >>> 0); return b; };
const str = (s) => { const d = Buffer.isBuffer(s) ? s : Buffer.from(s, "utf8"); return Buffer.concat([u16(d.length), d]); };
const hmac = (key, msg) => createHmac("sha256", key).update(msg).digest();

function buildToken(appId, cert, channel, ttl, isHost) {
  const issueTs = Math.floor(Date.now() / 1000);
  const salt = (crypto.getRandomValues(new Uint32Array(1))[0] % 99999999) + 1;

  let signing = hmac(u32(issueTs), cert);
  signing = hmac(u32(salt), signing);

  // 1 = join channel, 2/3/4 = publish audio/video/data
  const privs = { 1: ttl };
  if (isHost) { privs[2] = ttl; privs[3] = ttl; privs[4] = ttl; }
  const keys = Object.keys(privs).map(Number).sort((a, b) => a - b);

  const service = Buffer.concat([
    u16(1), u16(keys.length),
    ...keys.flatMap((k) => [u16(k), u32(privs[k])]),
    str(channel), str(""), // uid 0 = any uid
  ]);
  const info = Buffer.concat([str(appId), u32(issueTs), u32(ttl), u32(salt), u16(1), service]);
  const content = Buffer.concat([str(hmac(signing, info)), info]);
  return "007" + deflateSync(content).toString("base64");
}

const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const reply = (status, obj) => new Response(JSON.stringify(obj), { status, headers });

export async function onRequestGet({ request, env }) {
  const APP_ID = env.APP_ID || env.AGORA_APP_ID;
  const APP_CERTIFICATE = env.APP_CERTIFICATE || env.AGORA_APP_CERTIFICATE;

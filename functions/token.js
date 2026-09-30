import { RtcTokenBuilder, RtcRole } from "agora-token";

const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const reply = (status, obj) => new Response(JSON.stringify(obj), { status, headers });

export async function onRequestGet({ request, env }) {
  const APP_ID = env.APP_ID || env.AGORA_APP_ID;
  const APP_CERTIFICATE = env.APP_CERTIFICATE || env.AGORA_APP_CERTIFICATE;
  const HOST_KEY = env.HOST_KEY;
  if (!APP_ID || !APP_CERTIFICATE) return reply(500, { error: "APP_ID / APP_CERTIFICATE variables missing" });

  const q = new URL(request.url).searchParams;
  const channel = String(q.get("channel") || "main-webinar-room").slice(0, 64);
  const isHost = q.get("role") === "host";

  // Only the host (with the secret key) can publish. Audience gets a watch-only token.
  if (isHost && (!HOST_KEY || q.get("key") !== HOST_KEY)) return reply(403, { error: "invalid host key" });

  const ttl = 4 * 60 * 60; // 4 hours
  const role = isHost ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER;
  const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channel, 0, role, ttl, ttl);
  return reply(200, { appId: APP_ID, token, channel });
}

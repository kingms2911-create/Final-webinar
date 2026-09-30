const { RtcTokenBuilder, RtcRole } = require("agora-token");

const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const reply = (statusCode, obj) => ({ statusCode, headers, body: JSON.stringify(obj) });

exports.handler = async (event) => {
  const APP_ID = process.env.APP_ID || process.env.AGORA_APP_ID;
  const APP_CERTIFICATE = process.env.APP_CERTIFICATE || process.env.AGORA_APP_CERTIFICATE;
  const HOST_KEY = process.env.HOST_KEY;
  if (!APP_ID || !APP_CERTIFICATE) return reply(500, { error: "APP_ID / APP_CERTIFICATE env variables missing" });

  const q = event.queryStringParameters || {};
  const channel = String(q.channel || "main-webinar-room").slice(0, 64);
  const isHost = q.role === "host";

  // Only the host (with the secret key) can publish. Audience gets a watch-only token.
  if (isHost && (!HOST_KEY || q.key !== HOST_KEY)) return reply(403, { error: "invalid host key" });

  const ttl = 4 * 60 * 60; // 4 hours
  const role = isHost ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER;
  const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channel, 0, role, ttl, ttl);
  return reply(200, { appId: APP_ID, token, channel });
};

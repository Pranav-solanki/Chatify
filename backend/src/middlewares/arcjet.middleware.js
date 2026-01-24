import { isSpoofedBot } from "@arcjet/inspect";
import { aj } from "../libs/arcjet.js";
export const arcProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req,{requested:1}); // Deduct 5 tokens from the bucket
    // console.log("Arcjet decision", decision);
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "Too Many Requests" });
      }
      if (decision.reason.isBot()) {
        return res.status(403).json({ error: "No bots allowed" });
      }
      return res.status(403).json({ error: "Forbidden" });
    }

    // ✅ Hosting IP block
    if (decision.ip.isHosting()) {
      return res.status(403).json({ error: "Forbidden (Hosting IP)" });
    }

    // ✅ Spoofed bots
    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({ error: "Forbidden (Spoofed Bot)" });
    }

    // ✅ Allowed → Continue request
    next();
  } catch (error) {
    console.error("arcjet protection problem", error);
    next();
  }
};

import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { isSpoofedBot } from "@arcjet/inspect";
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
      ],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 50, // Refill 5 tokens per interval
      interval: 60, // Refill every 10 seconds
      capacity: 100, // Bucket capacity of 10 tokens
    }),
  ],
});

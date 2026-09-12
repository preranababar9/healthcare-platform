import { Redis } from "ioredis";
import { env } from "./env.js";

export const redis = new Redis(env.redisUrl, {
  maxRetriesPerRequest: null,
  lazyConnect: true,
});

redis.on("connect", () => {
  console.log("[redis] connected");
});

redis.on("error", (error) => {
  console.error("[redis] connection error:", error);
});

redis.on("close", () => {
  console.warn("[redis] connection closed");
});

export async function connectRedis(): Promise<void> {
  await redis.connect();
}

export async function disconnectRedis(): Promise<void> {
  redis.disconnect();
}

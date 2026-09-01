import mongoose from "mongoose";
import { env } from "./env.js";

mongoose.set("strictQuery", true);

export async function connectDatabase(): Promise<void> {
  mongoose.connection.on("connected", () => {
    console.log("[db] connected to MongoDB");
  });

  mongoose.connection.on("error", (error) => {
    console.error("[db] connection error:", error);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("[db] disconnected from MongoDB");
  });

  await mongoose.connect(env.mongodbUri);
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
}

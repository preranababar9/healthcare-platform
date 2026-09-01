import { Router, type Router as ExpressRouter } from "express";
import mongoose from "mongoose";

export const healthRouter: ExpressRouter = Router();

const dbStates: Record<number, string> = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    db: dbStates[mongoose.connection.readyState] ?? "unknown",
  });
});

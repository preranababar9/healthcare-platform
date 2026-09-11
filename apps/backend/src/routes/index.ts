import { Router, type Router as ExpressRouter } from "express";
import { healthRouter } from "./health.route.js";

export const apiRouter: ExpressRouter = Router();

apiRouter.use("/health", healthRouter);

// Register additional modules here, e.g.:
// apiRouter.use("/doctor", doctorRouter);
// apiRouter.use("/patient", patientRouter);

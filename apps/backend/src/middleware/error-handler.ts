import type { NextFunction, Request, Response } from "express";
import { isProduction } from "../config/env.js";

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void {
  const status = err instanceof HttpError ? err.status : 500;
  const message = err instanceof Error ? err.message : "Internal server error";

  if (status >= 500) {
    console.error(err);
  }

  res.status(status).json({
    error: {
      message,
      ...(isProduction ? {} : { stack: err instanceof Error ? err.stack : undefined }),
    },
  });
}

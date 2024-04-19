import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export const errorHsandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message.split("-")[1];
  logger.error(err);
  return res.status(400).json({
    error: message,
    message: "terjadi kesalahan pada server",
    data: null,
  });
};

export const notFoundHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error("not found");
  return res.status(404).json({
    error: "Not Found",
    message: "tidak ditemukan",
    data: null,
  });
};

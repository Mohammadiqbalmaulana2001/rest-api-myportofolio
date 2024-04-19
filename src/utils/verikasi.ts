import { Request, Response, NextFunction } from "express";
import { verikasiAccessToken } from "./jwt";
import { logger } from "./logger";
import prisma from "../utils/prismaClient";

export const verikasiUserAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  if (token === undefined) {
    logger.error("token tidak ditemukan");
    return res.status(401).json({
      error: "token tidak ditemukan",
      message: "token tidak ditemukan",
      data: null,
    });
  }
  const user = await verikasiAccessToken(token);
  if (user === null || typeof user === "string" || !("email" in user)) {
    logger.error("token tidak benar");
    return res.status(401).json({
      error: "Unauthorized",
      message: "Token tidak benar",
      data: null,
    });
  }
  try {
    const userData = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!userData || userData.role !== "admin") {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Anda bukan admin",
        data: null,
      });
    }
    logger.info("verikasi user admin berhasil");
    next();
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "verikasiUserAdmin" : ' +
          String((error as Error).message)
      )
    );
  }
};

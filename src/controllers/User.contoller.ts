import { NextFunction, Request, Response } from "express";
import {
  registrasiUserService,
  semuaUserService,
} from "../services/User.service";
import { logger } from "../utils/logger";
import { registrasiUserValidation } from "../validations/User.validation";
import { enkripsi } from "../utils/bcrypt";

export const semuaUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await semuaUserService();
    if (data === null || data.length === 0) {
      logger.info("GET /semua-user");
      res.status(200).json({
        error: false,
        message: "data user tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /semua-user");
    res.status(200).json({
      error: false,
      message: "data user",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaUserController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const registrasiUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = registrasiUserValidation(req.body);
    if (error != null) {
      logger.error("user gagal registrasi");
      res.status(400).json({
        error: error.details[0].message,
        nessage: "user gagal registrasi",
        data: value,
      });
    }
    value.password = await enkripsi(value.password);
    const user = await registrasiUserService({ ...value });
    logger.info("POST /registrasi-user");
    res.status(201).json({
      error: false,
      message: "user berhasil registrasi",
      user,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "registrasiUserController" : ' +
          String((error as Error).message)
      )
    );
  }
};

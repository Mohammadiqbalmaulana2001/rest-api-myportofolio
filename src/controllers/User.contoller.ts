import { NextFunction, Request, Response } from "express";
import {
  loginUserService,
  registrasiUserService,
  semuaUserService,
} from "../services/User.service";
import { logger } from "../utils/logger";
import {
  loginUserValidation,
  registrasiUserValidation,
} from "../validations/User.validation";
import { compare, enkripsi } from "../utils/bcrypt";
import { generateAccessToken } from "../utils/jwt";

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

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = loginUserValidation(req.body);
    if (error != null) {
      logger.error("user gagal login");
      res.status(400).json({
        error: error.details[0].message,
        nessage: "user gagal login",
        data: value,
      });
    }
    const user = await loginUserService({ ...value });
    if (user == null) {
      logger.error("user tidak ditemukan");
      return res.status(400).json({
        error: null,
        nessage: "email tidak ditemukan",
        data: value,
      });
    }
    if (!compare(value.password, user.password)) {
      logger.error("password tidak sesuai");
      return res.status(400).json({
        error: "Password tidak sesuai",
        message: "Login gagal",
        data: null,
      });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateAccessToken(user);
    logger.info("POST /login-user");
    res.status(200).json({
      error: null,
      message: "Login Berhasil",
      data: {
        user,
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "loginUserController" : ' +
          String((error as Error).message)
      )
    );
  }
};

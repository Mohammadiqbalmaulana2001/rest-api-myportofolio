import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import {
  addProfileService,
  deleteProfileService,
  getIdProfileService,
  semuaProfileService,
  updateProfileService,
} from "../services/Profile.service";
import { profileValidation } from "../validations/profile.validation";

export const semuaProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await semuaProfileService();
    if (data === null || data.length === 0) {
      logger.info("GET /semua-profile");
      res.status(200).json({
        error: false,
        message: "data profile tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /semua-profile");
    res.status(200).json({
      error: false,
      message: "data profile",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaProfileController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const getProfileByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await getIdProfileService({ id });
    if (!data) {
      logger.error("profile tidak ditemukan");
      return res.status(400).json({
        error: "profile tidak ditemukan",
        message: "profile tidak ditemukan",
        data: null,
      });
    }
    logger.info("GET /get-profile By Id");
    res.status(200).json({
      error: false,
      message: "data profile dengan id " + id,
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "getProfileController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const addProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = profileValidation(req.body);
    if (error != null) {
      logger.error("profile gagal ditambahkan");
      return res.status(400).json({
        error: error.details[0].message,
        message: "profile gagal ditambahkan",
        data: value,
      });
    }
    const data = await addProfileService(value);
    logger.info("POST /add-profile");
    return res.status(201).json({
      error: false,
      message: "profile berhasil ditambahkan",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "addProfileController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const updateProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { error, value } = profileValidation(req.body);
    if (error != null) {
      logger.error("profile gagal diupdate");
      return res.status(400).json({
        error: error.details[0].message,
        message: "profile gagal diupdate",
        data: value,
      });
    }

    const data = await updateProfileService({ ...value, id });
    logger.info("POST /update-profile");
    return res.status(201).json({
      error: false,
      message: "profile berhasil diupdate",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "updateProfileController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const deleteProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) {
      logger.error("profile gagal di hapus");
      return res.status(400).json({
        error: "profile gagal di hapus",
        message: "profile gagal di hapus",
        data: null,
      });
    }
    const data = await deleteProfileService({ id });
    logger.info("POST /delete-profile");
    return res.status(201).json({
      error: false,
      message: "profile berhasil di hapus",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "deleteProfileController" : ' +
          String((error as Error).message)
      )
    );
  }
};

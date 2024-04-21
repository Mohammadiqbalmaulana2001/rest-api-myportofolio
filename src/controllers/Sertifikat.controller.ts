import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { sertifikatValidation } from "../validations/Sertifikat.validation";
import {
  addSertifikatService,
  deleteSertifikatService,
  getByIdSertifikatService,
  semuaSertifikatService,
  updateSertifikatService,
} from "../services/Sertifikat.service";

export const semuaSertifikatController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sertifikat = await semuaSertifikatService();
    if (sertifikat === null || sertifikat.length === 0) {
      logger.info("GET /semua-sertifikat");
      return res.status(200).json({
        error: false,
        status: "data sertifikat tidak ditemukan",
        data: {
          sertifikat: [],
        },
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        sertifikat,
      },
    });
  } catch (err) {
    logger.error(err);
    next(err);
  }
};

export const getByIdSertifikatController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const sertifikat = await getByIdSertifikatService({ id });
    if (!sertifikat) {
      logger.error("sertifikat tidak ditemukan");
      return res.status(400).json({
        error: "sertifikat tidak ditemukan",
        message: "sertifikat tidak ditemukan",
        data: null,
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        sertifikat,
      },
    });
  } catch (err) {
    next(
      logger.error(
        'Error pada controller "getByIdSertifikatController" : ' +
          String((err as Error).message)
      )
    );
  }
};

export const addSertifikatController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const { error, value } = sertifikatValidation(payload);
    if (error != null) {
      logger.error("sertifikat gagal ditambahkan");
      return res.status(400).json({
        error: error.details[0].message,
        message: "sertifikat gagal ditambahkan",
        data: null,
      });
    }
    const sertifikat = await addSertifikatService(value);
    if (!sertifikat) {
      logger.error("sertifikat gagal ditambahkan");
      return res.status(400).json({
        error: "sertifikat gagal ditambahkan",
        message: "sertifikat gagal ditambahkan",
        data: null,
      });
    }
    logger.info("POST /add-sertifikat");
    res.status(201).json({
      error: false,
      message: "data sertifikat ditambahkan",
      data: sertifikat,
    });
  } catch (err) {
    next(
      logger.error(
        'Error pada controller "addSertifikatController" : ' +
          String((err as Error).message)
      )
    );
  }
};

export const updateSertifikatController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const { error, value } = sertifikatValidation(payload);
    if (error != null) {
      logger.error("sertifikat gagal diupdate");
      return res.status(400).json({
        error: error.details[0].message,
        message: "sertifikat gagal diupdate",
        data: null,
      });
    }
    const sertifikat = await updateSertifikatService({ ...value, id });
    if (!sertifikat) {
      logger.error("sertifikat gagal diupdate");
      return res.status(400).json({
        error: "sertifikat gagal diupdate",
        message: "sertifikat gagal diupdate",
        data: null,
      });
    }
    logger.info("POST /update-sertifikat");
    res.status(201).json({
      error: false,
      message: "data sertifikat diupdate",
      data: sertifikat,
    });
  } catch (err) {
    next(
      logger.error(
        'Error pada controller "updateSertifikatController" : ' +
          String((err as Error).message)
      )
    );
  }
};

export const deleteSertifikatController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const sertifikat = await deleteSertifikatService({ id });
    if (!sertifikat) {
      logger.error("sertifikat gagal dihapus");
      return res.status(400).json({
        error: "sertifikat gagal dihapus",
        message: "sertifikat gagal dihapus",
        data: null,
      });
    }
    logger.info("POST /delete-sertifikat");
    res.status(201).json({
      error: false,
      message: "data sertifikat dihapus",
      data: sertifikat,
    });
  } catch (err) {
    next(
      logger.error(
        'Error pada controller "deleteSertifikatController" : ' +
          String((err as Error).message)
      )
    );
  }
};

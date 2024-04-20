import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import {
  addPendidikanService,
  deletePendidikanService,
  getIdPendidikanService,
  semuaPendidikanService,
  updatePendidikanService,
} from "../services/Pendidikan.service";
import { pendidikanValidation } from "../validations/Pendidikan.validation";

export const semuaPendidikanController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pendidikan = await semuaPendidikanService();
    if (pendidikan === null || pendidikan.length === 0) {
      logger.info("GET /pendidikan");
      return res.status(200).json({
        error: false,
        message: "data pendidikan tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /pendidikan");
    res.status(200).json({
      error: false,
      message: "data pendidikan",
      data: pendidikan,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaPendidikanController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const getByIdPendidikanController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const pendidikan = await getIdPendidikanService({ id });
    if (!pendidikan) {
      logger.error("pendidikan tidak ditemukan");
      return res.status(400).json({
        error: "pendidikan tidak ditemukan",
        message: "pendidikan tidak ditemukan",
        data: null,
      });
    }
    logger.info("GET /get-pendidikan By Id");
    res.status(200).json({
      error: false,
      message: "data pendidikan dengan id " + id,
      data: pendidikan,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "getByIdPendidikanController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const addPendidikanController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = pendidikanValidation(req.body);
    if (error != null) {
      logger.error("pendidikan gagal ditambahkan");
      return res.status(400).json({
        error: error.details[0].message,
        message: "pendidikan gagal ditambahkan",
        data: null,
      });
    }
    const pendidikan = await addPendidikanService(value);
    if (!pendidikan) {
      logger.error("pendidikan gagal ditambahkan");
      return res.status(400).json({
        error: "pendidikan gagal ditambahkan",
        message: "pendidikan gagal ditambahkan",
        data: null,
      });
    }
    logger.info("POST /add-pendidikan");
    res.status(201).json({
      error: false,
      message: "data pendidikan ditambahkan",
      data: pendidikan,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "addPendidikanController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const updatePendidikanController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { error, value } = pendidikanValidation(req.body);
    if (error != null) {
      logger.error("pendidikan gagal diupdate");
      return res.status(400).json({
        error: error.details[0].message,
        message: "pendidikan gagal diupdate",
        data: null,
      });
    }
    const pendidikan = await updatePendidikanService({ ...value, id });
    if (!pendidikan) {
      logger.error("pendidikan gagal diupdate");
      return res.status(400).json({
        error: "pendidikan gagal diupdate",
        message: "pendidikan gagal diupdate",
        data: null,
      });
    }

    logger.info("POST /update-pendidikan");
    res.status(201).json({
      error: false,
      message: "data pendidikan diupdate",
      data: pendidikan,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "updatePendidikanController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const deletePendidikanController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const pendidikan = await deletePendidikanService({ id });
    if (!pendidikan) {
      logger.error("pendidikan gagal di hapus");
      return res.status(400).json({
        error: "pendidikan gagal diupdate",
        message: "pendidikan gagal diupdate",
        data: null,
      });
    }

    logger.info("POST /delete-pendidikan");
    res.status(201).json({
      error: false,
      message: "data pendidikan diupdate",
      data: pendidikan,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "deletePendidikanController" : ' +
          String((error as Error).message)
      )
    );
  }
};

import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { projectValidation } from "../validations/Project.validation";
import {
  getIdProjectService,
  semuaProjectService,
  updateProjectService,
  addProjectService,
  deleteProjectService,
  userIdProjectService,
} from "../services/Project.service";

export const semuaProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await semuaProjectService();
    if (data === null || data.length === 0) {
      logger.info("GET /semua-project");
      return res.status(200).json({
        error: false,
        message: "data project tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /semua-project");
    res.status(200).json({
      error: false,
      message: "data project",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaProjectController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const getIdProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await getIdProjectService({ id });
    if (!data) {
      logger.error("project tidak ditemukan");
      return res.status(400).json({
        error: "project tidak ditemukan",
        message: "project tidak ditemukan",
        data: null,
      });
    }

    logger.info("GET /get-project By Id");
    return res.status(200).json({
      error: false,
      message: "data project dengan id " + id,
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "getIdProjectController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const addProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = projectValidation(req.body);
    if (error != null) {
      logger.error("project gagal ditambahkan");
      return res.status(400).json({
        error: error.details[0].message,
        message: "project gagal ditambahkan",
        data: value,
      });
    }
    const userId = await userIdProjectService(value);
    if (userId) {
      logger.error("project gagal ditambahkan");
      return res.status(400).json({
        error: "project untuk userId ini sudah ada",
        message: "project gagal ditambahkan",
        data: value,
      });
    } else if (!userId) {
      logger.error("project gagal ditambahkan");
      return res.status(400).json({
        error: "project untuk userId ini tidak ada",
        message: "project gagal ditambahkan",
        data: value,
      });
    }

    const data = await addProjectService(value);
    logger.info("POST /add-project");
    return res.status(201).json({
      error: false,
      message: "project berhasil ditambahkan",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "addProjectController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const updateProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { error, value } = projectValidation(req.body);
    if (error != null) {
      logger.error("project gagal diupdate");
      return res.status(400).json({
        error: error.details[0].message,
        message: "project gagal diupdate",
        data: value,
      });
    }

    const userId = await userIdProjectService(value);
    if (userId) {
      logger.error("project gagal diupdate");
      return res.status(400).json({
        error: "project untuk userId ini sudah ada",
        message: "project gagal diupdate",
        data: value,
      });
    } else if (!userId && id !== userId) {
      logger.error("project gagal diupdate");
      return res.status(400).json({
        error: "project untuk userId ini tidak ada",
        message: "project gagal diupdate",
        data: value,
      });
    }

    const data = await updateProjectService({ ...value, id });
    logger.info("PUT /update-project");
    return res.status(200).json({
      error: false,
      message: "project berhasil diupdate",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "updateProjectController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const deleteProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await deleteProjectService({ id });
    logger.info("DELETE /delete-project");
    return res.status(200).json({
      error: false,
      message: "project berhasil dihapus",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "deleteProjectController" : ' +
          String((error as Error).message)
      )
    );
  }
};

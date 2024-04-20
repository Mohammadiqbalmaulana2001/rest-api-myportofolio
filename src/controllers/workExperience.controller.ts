import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import {
  addWorkExperienceService,
  deleteWorkExperienceService,
  getIdWorkExperienceService,
  semuaWorkExperienceService,
  updateWorkExperienceService,
} from "../services/workExperience.service";
import { workExperienceValidation } from "../validations/WorkExperien.validation";

export const semuaWorkExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await semuaWorkExperienceService();
    if (data === null || data.length === 0) {
      logger.info("GET /semua-work-experience");
      return res.status(200).json({
        error: false,
        message: "data work experience tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /semua-work-experience");
    return res.status(200).json({
      error: false,
      message: "data work experience",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaWorkExperienceController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const getIdWorkExperienceByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await getIdWorkExperienceService({ id });
    if (!data) {
      logger.error("work experience tidak ditemukan");
      return res.status(400).json({
        error: "work experience tidak ditemukan",
        message: "work experience tidak ditemukan",
        data: null,
      });
    }
    logger.info("GET /get-work-experience By Id");
    return res.status(200).json({
      error: false,
      message: "data work experience",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "getWorkExperienceController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const addWorkExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const { error, value } = workExperienceValidation(payload);
    if (error) {
      logger.error(error.details[0].message);
      return res.status(400).json({
        error: error.details[0].message,
        message: error.details[0].message,
        data: null,
      });
    }
    const data = await addWorkExperienceService(value);
    logger.info("POST /add-work-experience");
    return res.status(201).json({
      error: false,
      message: "work experience berhasil ditambahkan",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "addWorkExperienceController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const updateWorkExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const { error, value } = workExperienceValidation(payload);
    if (error) {
      logger.error('Error pada controller "updateWorkExperienceController" ');
      return res.status(400).json({
        error: 'Error pada controller "updateWorkExperienceController" ',
        message: 'Error pada controller "updateWorkExperienceController" ',
        data: null,
      });
    }
    const data = await updateWorkExperienceService({ ...value, id });
    if (!data) {
      logger.error("work experience tidak ditemukan");
      return res.status(400).json({
        error: "work experience tidak ditemukan",
        message: "work experience tidak ditemukan",
        data: null,
      });
    }
    logger.info("PUT /update-work-experience");
    return res.status(200).json({
      error: false,
      message: "work experience berhasil diupdate",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "updateWorkExperienceController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const deleteWorkExperienceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await deleteWorkExperienceService({ id });
    if (!data) {
      logger.error("work experience tidak ditemukan");
      return res.status(400).json({
        error: "work experience tidak ditemukan",
        message: "work experience tidak ditemukan",
        data: null,
      });
    }
    logger.info("DELETE /delete-work-experience");
    return res.status(200).json({
      error: false,
      message: "work experience berhasil dihapus",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "deleteWorkExperienceController" : ' +
          String((error as Error).message)
      )
    );
  }
};

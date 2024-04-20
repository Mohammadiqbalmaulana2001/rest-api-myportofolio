import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { skillValidation } from "../validations/Skill.validation";
import {
  getIdSkillService,
  semuaSkillService,
  updateSkillService,
  addSkillService,
  deleteSkillService,
} from "../services/Skill.service";

export const semuaSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await semuaSkillService();
    if (data === null || data.length === 0) {
      logger.info("GET /semua-skill");
      return res.status(200).json({
        error: false,
        message: "data skill tidak ditemukan",
        data: [],
      });
    }
    logger.info("GET /semua-skill");
    res.status(200).json({
      error: false,
      message: "data skill",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "semuaSkillController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const getIdSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) {
      logger.error("skill gagal di hapus");
      return res.status(400).json({
        error: "id skill tidak ditemukan",
        message: "skill gagal di hapus",
        data: null,
      });
    }
    const data = await getIdSkillService({ id });
    if (!data) {
      logger.error("skill tidak ditemukan");
      return res.status(400).json({
        error: "skill tidak ditemukan",
        message: "skill tidak ditemukan",
        data: null,
      });
    } else {
      logger.info("GET /get-skill By Id");
      res.status(200).json({
        error: false,
        message: "data skill dengan id " + id,
        data,
      });
    }
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "getIdSkillController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const addSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = skillValidation(req.body);
    if (error) {
      logger.error("skill gagal ditambahkan");
      return res.status(400).json({
        error: error.details[0].message,
        message: "skill gagal ditambahkan",
        data: null,
      });
    }

    const data = await addSkillService(value);
    if (!data) {
      logger.error("skill gagal ditambahkan");
      return res.status(400).json({
        error: "skill gagal ditambahkan",
        message: "skill gagal ditambahkan",
        data: null,
      });
    }

    logger.info("POST /add-skill");
    res.status(201).json({
      error: false,
      message: "data skill ditambahkan",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "addSkillController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const updateSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { error, value } = skillValidation(req.body);
    if (error) {
      logger.error("skill gagal diupdate");
      return res.status(400).json({
        error: error.details[0].message,
        message: "skill gagal diupdate",
        data: null,
      });
    }
    const data = await updateSkillService({ ...value, id });
    if (!data) {
      logger.error("skill gagal diupdate");
      return res.status(400).json({
        error: "skill gagal diupdate",
        message: "skill gagal diupdate",
        data: null,
      });
    }

    logger.info("POST /update-skill");
    res.status(201).json({
      error: false,
      message: "data skill diupdate",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "updateSkillController" : ' +
          String((error as Error).message)
      )
    );
  }
};

export const deleteSkillController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) {
      logger.error("skill gagal di hapus");
      return res.status(400).json({
        error: "id skill tidak ditemukan",
        message: "skill gagal di hapus",
        data: null,
      });
    }
    const data = await deleteSkillService({ id });
    if (!data) {
      logger.error("skill gagal di hapus");
      return res.status(400).json({
        error: " data skill gagal di hapus",
        message: "skill gagal di hapus",
        data: null,
      });
    } else if (!data.id) {
      logger.error("skill gagal di hapus");
      return res.status(400).json({
        error: "id skill gagal di hapus",
        message: "skill gagal di hapus",
        data: null,
      });
    }

    logger.info("POST /delete-skill");
    res.status(201).json({
      error: false,
      message: "data skill di hapus",
      data,
    });
  } catch (error) {
    next(
      logger.error(
        'Error pada controller "deleSkillController" : ' +
          String((error as Error).message)
      )
    );
  }
};

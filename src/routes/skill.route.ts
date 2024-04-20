import { Router } from "express";
import {
  semuaSkillController,
  getIdSkillController,
  addSkillController,
  updateSkillController,
  deleteSkillController,
} from "../controllers/Skill.controller";

export const SkillRoute: Router = Router();

SkillRoute.get("/", semuaSkillController);
SkillRoute.get("/:id", getIdSkillController);
SkillRoute.post("/", addSkillController);
SkillRoute.put("/:id", updateSkillController);
SkillRoute.delete("/:id", deleteSkillController);

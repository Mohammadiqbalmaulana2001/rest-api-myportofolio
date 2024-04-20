import { Router } from "express";

import {
  semuaWorkExperienceController,
  getIdWorkExperienceByIdController,
  addWorkExperienceController,
  updateWorkExperienceController,
  deleteWorkExperienceController,
} from "../controllers/workExperience.controller";

export const WorkExperienceRoute: Router = Router();

WorkExperienceRoute.get("/", semuaWorkExperienceController);
WorkExperienceRoute.get("/:id", getIdWorkExperienceByIdController);
WorkExperienceRoute.post("/", addWorkExperienceController);
WorkExperienceRoute.put("/:id", updateWorkExperienceController);
WorkExperienceRoute.delete("/:id", deleteWorkExperienceController);

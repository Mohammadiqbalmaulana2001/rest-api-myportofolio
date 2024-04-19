import { Router } from "express";
import {
  semuaProjectController,
  getIdProjectController,
  addProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/Project.controller";

export const ProjectRouter: Router = Router();

ProjectRouter.get("/", semuaProjectController);
ProjectRouter.get("/:id", getIdProjectController);
ProjectRouter.post("/", addProjectController);
ProjectRouter.put("/:id", updateProjectController);
ProjectRouter.delete("/:id", deleteProjectController);

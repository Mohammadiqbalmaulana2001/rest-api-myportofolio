import { Router } from "express";
import {
  addProfileController,
  deleteProfileController,
  getProfileByIdController,
  semuaProfileController,
  updateProfileController,
} from "../controllers/profile.controller";

export const ProfileRouter: Router = Router();

ProfileRouter.get("/", semuaProfileController);
ProfileRouter.get("/:id", getProfileByIdController);
ProfileRouter.post("/", addProfileController);
ProfileRouter.put("/:id", updateProfileController);
ProfileRouter.delete("/:id", deleteProfileController);

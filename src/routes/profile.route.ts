import { verikasiUserAdmin } from "./../utils/verikasi";
import { Router } from "express";
import {
  addProfileController,
  deleteProfileController,
  getProfileByIdController,
  semuaProfileController,
  updateProfileController,
} from "../controllers/profile.controller";

export const ProfileRouter: Router = Router();

ProfileRouter.get("/", verikasiUserAdmin, semuaProfileController);
ProfileRouter.get("/:id", verikasiUserAdmin, getProfileByIdController);
ProfileRouter.post("/", addProfileController);
ProfileRouter.put("/:id", updateProfileController);
ProfileRouter.delete("/:id", deleteProfileController);

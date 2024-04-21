import { Router } from "express";
import {
  semuaSertifikatController,
  getByIdSertifikatController,
  addSertifikatController,
  updateSertifikatController,
  deleteSertifikatController,
} from "../controllers/Sertifikat.controller";

export const SertifikatRoute: Router = Router();

SertifikatRoute.get("/", semuaSertifikatController);
SertifikatRoute.get("/:id", getByIdSertifikatController);
SertifikatRoute.post("/", addSertifikatController);
SertifikatRoute.put("/:id", updateSertifikatController);
SertifikatRoute.delete("/:id", deleteSertifikatController);

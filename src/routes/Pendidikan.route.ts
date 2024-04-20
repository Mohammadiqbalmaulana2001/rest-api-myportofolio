import {
  semuaPendidikanController,
  getByIdPendidikanController,
  addPendidikanController,
  updatePendidikanController,
  deletePendidikanController,
} from "./../controllers/Pendidikan.controller";
import { Router } from "express";

export const PendidikanRoute: Router = Router();

PendidikanRoute.get("/", semuaPendidikanController);
PendidikanRoute.get("/:id", getByIdPendidikanController);
PendidikanRoute.post("/", addPendidikanController);
PendidikanRoute.put("/:id", updatePendidikanController);
PendidikanRoute.delete("/:id", deletePendidikanController);

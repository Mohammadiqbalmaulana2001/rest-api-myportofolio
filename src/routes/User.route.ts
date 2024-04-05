import { Router } from "express";
import {
  registrasiUserController,
  semuaUserController,
} from "../controllers/User.contoller";

export const UserRouter: Router = Router();

UserRouter.get("/users", semuaUserController);
UserRouter.post("/registrasi", registrasiUserController);

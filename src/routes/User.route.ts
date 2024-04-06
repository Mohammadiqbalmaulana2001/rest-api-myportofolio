import { Router } from "express";
import {
  loginUserController,
  registrasiUserController,
  semuaUserController,
} from "../controllers/User.contoller";
import { verikasiUserAdmin } from "../utils/verikasi";

export const UserRouter: Router = Router();

UserRouter.get("/users", verikasiUserAdmin, semuaUserController);
UserRouter.post("/registrasi", registrasiUserController);
UserRouter.post("/login", loginUserController);

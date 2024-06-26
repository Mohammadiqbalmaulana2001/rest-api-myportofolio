import express, { Application } from "express";
import cors from "cors";
import "../utils/logger";
import { Routes } from "../routes";
import cookieParser from "cookie-parser";

const appMidleware: Application = express();

appMidleware.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "HEAD", "DELETE", "OPTIONS"],
  })
);

appMidleware.options("*", cors());
appMidleware.use(express.json());
appMidleware.use(cookieParser());
appMidleware.use(express.urlencoded({ extended: true }));

Routes(appMidleware);

export default appMidleware;

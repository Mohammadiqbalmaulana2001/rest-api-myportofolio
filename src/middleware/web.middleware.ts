import express, { Application } from "express";
import appMidleware from "./index.middleware";

const app:Application = express();

app.use(appMidleware);

export default app
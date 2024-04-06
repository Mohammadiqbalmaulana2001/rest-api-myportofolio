import { Application, Router } from "express";
import { HomeRouter } from "./home.router";
import { UserRouter } from "./User.route";
import { errorHsandler, notFoundHandler } from "../controllers/error";

const __routes: Array<[string, Router]> = [
  ["/", HomeRouter],
  ["/auth", UserRouter],
];

export const Routes = (app: Application) => {
  __routes.forEach((route) => {
    const [path, router] = route;
    app.use(path, router);
  });

  app.use("*", errorHsandler);
  app.use("*", notFoundHandler);
};

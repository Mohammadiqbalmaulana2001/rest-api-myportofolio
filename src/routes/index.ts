import { Application, Router } from "express";
import { HomeRouter } from "./home.router";
import { UserRouter } from "./User.route";
import { errorHsandler, notFoundHandler } from "../controllers/error";
import { ProfileRouter } from "./profile.route";
import { ProjectRouter } from "./Project.route";
import { SkillRoute } from "./skill.route";
import { WorkExperienceRoute } from "./WorkExperience.route";

const __routes: Array<[string, Router]> = [
  ["/", HomeRouter],
  ["/auth", UserRouter],
  ["/profile", ProfileRouter],
  ["/project", ProjectRouter],
  ["/skill", SkillRoute],
  ["/experience", WorkExperienceRoute],
];

export const Routes = (app: Application) => {
  __routes.forEach((route) => {
    const [path, router] = route;
    app.use(path, router);
  });

  app.use("*", errorHsandler);
  app.use("*", notFoundHandler);
};

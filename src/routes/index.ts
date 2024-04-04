import { Application, Router } from "express";
import { HomeRouter } from "./home.router";

const __routes:Array<[string, Router]> = [
  ["/", HomeRouter],
]

export const Routes = (app:Application) => {
  __routes.forEach((route) => {
    const [path, router] = route
    app.use(path, router)
  })
}
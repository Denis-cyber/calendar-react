import React from "react";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  //   exact?: boolean;
}

export enum RouteNames {
  EVENT = "/",
  LOGIN = "/login",
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, element: Login }];

export const privateRoutes: IRoute[] = [{ path: RouteNames.EVENT, element: Event }];

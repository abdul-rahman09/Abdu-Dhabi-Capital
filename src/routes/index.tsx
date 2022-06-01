import React, { Suspense } from "react";
import map from "lodash/map";
import find from "lodash/find";
import each from "lodash/each";
import replace from "lodash/replace";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardLayout from "layouts/User";
import Dashboard from "pages/Dashboard";

const RoutesHOC = (routes: any, DEFAULT_PATH: any) => () => (
  <Suspense fallback={<div />}>
    <Switch>
      {map(routes, (route) => {
        return (
          <Route
            key={route.title}
            path={route.path}
            component={route.component}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export const dashboardRoutes = {
  DASHBOARD: {
    path: "/:page?/:id?",
    title: "Abu Dhabi Capital",
    component: Dashboard,
    isPrivate: true,
  },
};

export const routes = {
  Dashboard: {
    path: "/",
    title: "Abu Dhabi Capital",
    component: DashboardLayout(RoutesHOC(dashboardRoutes, "/")),
    isPrivate: true,
  },
};

const AppRoutes = RoutesHOC(routes, "/login");
export default AppRoutes;

export const DEFAULT_PATH = "/";
export const USER_LANDING_PAGE = "/";

export const getTitleByPath = (path: string) => {
  const route = find(routes, (route: any) => route.path === path);
  return route && route.title ? route.title : "";
};

export const createRoute = (url: string, params = {}): string => {
  each(params, (val: string, key: string) => {
    val = Array.isArray(val) ? val.join(",") : val;
    url = replace(url, new RegExp(`:${key}`, "g"), val);
  });
  return url;
};

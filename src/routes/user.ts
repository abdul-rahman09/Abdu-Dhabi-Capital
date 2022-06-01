import { createRoute } from "routes";

export const routes = {
  Details: {
    path: "/:page",
    format: function (page: string | number) {
      return createRoute(this.path, { page });
    },
  },
  UserDetail: {
    path: "/:page/:id",
    format: function (page: string | number, id: string | number) {
      return createRoute(this.path, { page, id });
    },
  },
};

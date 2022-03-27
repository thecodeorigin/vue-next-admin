import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { dashboardRoutes } from "@modules/dashboard/router";
import { usersRoutes } from "@modules/users/router";

const routes: Array<RouteRecordRaw> = [dashboardRoutes, usersRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };

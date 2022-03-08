import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { settingsRoutes } from '@modules/settings/router';
import { dashboardRoutes } from '@modules/dashboard/router';
import { administrationRoutes } from '@modules/administration/router';
import { analyticsRoutes } from '@modules/analytics/router';
import { pluginsRoutes } from '@modules/plugins/router';
import { reportRoutes } from '@modules/report/router';

const routes: Array<RouteRecordRaw> = [
  administrationRoutes,
  analyticsRoutes,
  dashboardRoutes,
  pluginsRoutes,
  reportRoutes,
  settingsRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };

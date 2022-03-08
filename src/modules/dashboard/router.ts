import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import DashboardPage from "./page.vue";

export const dashboardRoutes: RouteRecordRaw = {
  path: "/",
  name: "DashboardPage",
  component: DashboardPage,
  meta: {
    layout: Layouts.DEFAULT,
  }
}

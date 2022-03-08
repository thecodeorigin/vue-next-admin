import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import AnalyticsPage from "./page.vue";

export const analyticsRoutes: RouteRecordRaw = {
  path: "/analytics",
  name: "AnalyticsPage",
  component: AnalyticsPage,
  meta: {
    layout: Layouts.DEFAULT,
  }
}

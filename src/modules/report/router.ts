import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import ReportPage from "./page.vue";

export const reportRoutes: RouteRecordRaw = {
  path: "/report",
  name: "ReportPage",
  component: ReportPage,
  meta: {
    layout: Layouts.DEFAULT,
  }
}

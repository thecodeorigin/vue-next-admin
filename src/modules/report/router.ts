import { Layouts } from "@constants/layouts";
import { RouteRecordRaw } from "vue-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReportPage from "./page.vue";

export const reportRoutes: RouteRecordRaw = {
  path: "/report",
  name: "ReportPage",
  component: ReportPage,
  meta: {
    layout: Layouts.DEFAULT,
  },
};

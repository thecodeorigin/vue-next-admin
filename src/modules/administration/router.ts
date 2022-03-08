import { Layouts } from "@constants/layouts";
import { RouteRecordRaw } from "vue-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AdministrationPage from "./page.vue";

export const administrationRoutes: RouteRecordRaw = {
  path: "/administration",
  name: "AdministrationPage",
  component: AdministrationPage,
  meta: {
    layout: Layouts.DEFAULT,
  },
};

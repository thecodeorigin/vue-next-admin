import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import AdministrationPage from "./page.vue";

export const administrationRoutes: RouteRecordRaw = {
  path: "/administration",
  name: "AdministrationPage",
  component: AdministrationPage,
  meta: {
    layout: Layouts.DEFAULT,
  }
}

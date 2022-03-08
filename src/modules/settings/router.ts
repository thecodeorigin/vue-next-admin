import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import SettingsPage from "./page.vue";

export const settingsRoutes: RouteRecordRaw = {
  path: "/settings",
  name: "SettingsPage",
  component: SettingsPage,
  meta: {
    layout: Layouts.BLANK,
  }
}

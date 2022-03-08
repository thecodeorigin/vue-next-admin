import { Layouts } from '@constants/layouts';
import { RouteRecordRaw } from "vue-router";
import PluginsPage from "./page.vue";

export const pluginsRoutes: RouteRecordRaw = {
  path: "/plugins",
  name: "PluginsPage",
  component: PluginsPage,
  meta: {
    layout: Layouts.DEFAULT,
  }
}

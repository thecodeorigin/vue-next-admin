import { Layouts } from "@constants/layouts";
import { RouteRecordRaw } from "vue-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import UsersPage from "./page.vue";

export const usersRoutes: RouteRecordRaw = {
  path: "/users",
  name: "UsersPage",
  component: UsersPage,
  meta: {
    layout: Layouts.DEFAULT,
    title: "Users",
  },
};

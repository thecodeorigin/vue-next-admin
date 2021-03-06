import "virtual:windi.css";
import "./core/styles/css/all.css";
import "./core/styles/scss/all.scss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Root from "./Root.vue";

import { createApp } from "vue";

import { createPinia } from "pinia";

import { router } from "@/router";

import { httpPlugin } from "@/core/plugins/http";

// DO NOT IMPORT PLUGINS BEFORE use(createPinia())
createApp(Root).use(createPinia()).use(router).use(httpPlugin).mount("#app");

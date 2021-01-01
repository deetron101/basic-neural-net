import { createWebHistory, createRouter } from "vue-router";
import Basic from "../views/Basic.vue";

const history = createWebHistory();
const routes = [
  { path: "/", component: Basic},
  { path: "/basic", component: Basic }
];

const router = createRouter({ history, routes });
export default router;
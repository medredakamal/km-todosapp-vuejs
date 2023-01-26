import Vue from "vue";
import VueRouter from "vue-router";

import Todos from "../views/Todos.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Todos,
    name: "todos",
    meta: {
      title: "Home Page - Example App",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

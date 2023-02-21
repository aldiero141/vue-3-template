import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import TableView from "../views/Dashboard/TableView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/landing",
    },
    {
      path: "/landing",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      redirect: "/dashboard/table",
    },
    {
      path: "/dashboard/table",
      name: "table",
      component: TableView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import TenderHome from "../views/TenderHome.vue";
import ArtworkBbb from "../components/Artwork.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TenderHome,
  },
  {
    path: "/bbb-songs",
    name: "bbb-songs",
    component: ArtworkBbb,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/TenderAbout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

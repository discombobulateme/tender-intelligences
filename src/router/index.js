import { createRouter, createWebHistory } from "vue-router";

import TenderHome from "../views/TenderHome.vue";
import BbbSongs from "../components/BbbSongs.vue";
import QueerFeminist from "../components/QueerFeminist.vue";
import ArtSearch from "../components/ArtSearch.vue";
import AutonomousBodies from "../components/AutonomousBodies.vue";
import ContextualNormalcy from "../components/ContextualNormalcy.vue";
import CommunityIntelligence from "../components/CommunityIntelligence.vue";
import NichtsSolide from "../components/NichtsSolide.vue";
import PensamentoComputacional from "../components/PensamentoComputacional.vue";
import HowMachines from "../components/HowMachines.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TenderHome,
  },
  {
    path: "/home",
    name: "home",
    component: TenderHome,
  },
  {
    path: "/bbb-songs",
    name: "bbb-songs",
    component: BbbSongs,
  },
  {
    path: "/queer-feminist",
    name: "queer-feminist",
    component: QueerFeminist,
  },
  {
    path: "/art-search",
    name: "art-search",
    component: ArtSearch,
  },
  {
    path: "/autonomous-bodies",
    name: "autonomous-bodies",
    component: AutonomousBodies,
  },
  {
    path: "/contextual-normalcy",
    name: "contextual-normalcy",
    component: ContextualNormalcy,
  },
  {
    path: "/community-intelligence",
    name: "community-intelligence",
    component: CommunityIntelligence,
  },
  {
    path: "/nichts-solide",
    name: "nichts-solide",
    component: NichtsSolide,
  },
  {
    path: "/pensamento-computacional",
    name: "pensamento-computacional",
    component: PensamentoComputacional,
  },
  {
    path: "/how-machines",
    name: "how-machines",
    component: HowMachines,
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

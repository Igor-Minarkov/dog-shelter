import { createWebHistory, createRouter } from "vue-router";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Breeds from "../components/Breeds";
import Timeline from "../components/Timeline";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Hero,
  },
  {
    path: "/breeds",
    name: "Breeds",
    component: Breeds,
  },
  {
    path: "/details/:id",
    component: Details,
  },
  {
    path: "/timeline/:id",
    name: "Timeline",
    component: Timeline,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("role") === "User") {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

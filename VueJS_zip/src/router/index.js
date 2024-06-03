import { createRouter, createWebHistory } from "vue-router";
import Home from "../Page/home.vue";
import Shop from "../Page/shop.vue";
import PlantCare from "../Page/plant-care.vue";
import Blogs from "../Page/blogs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/plant-care",
      name: "plant-care",
      component: PlantCare,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs,
    },
  ],
});

export default router;

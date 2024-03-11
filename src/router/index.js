import { createRouter, createWebHistory } from "vue-router"
import AboutView from "../views/AboutView.vue"
import CreatorView from "@/views/CreatorView.vue"
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/creator",
    name: "creator",
    component: CreatorView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

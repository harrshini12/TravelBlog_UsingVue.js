import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Contact from "../views/Contact.vue";
import NewPost from "../views/NewPost.vue";

const routes = [
  //home page
  {
    path: "/",
    redirect: "/home",
  },
  //home page
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "NewPost",
    component: NewPost,
  },
  // details page
  {
    path: "/details/:des_id",
    name: "Details",
    component: Details,
    props: true,
  },
  // Contact Page
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  // catchall 404
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //scroll behavior when moving between pages
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;

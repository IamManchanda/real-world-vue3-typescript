import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: () =>
      import(/* webpackChunkName: "event-list" */ "../views/EventList.vue"),
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "event-details" */ "../views/EventDetails.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

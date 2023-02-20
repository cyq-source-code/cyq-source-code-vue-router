import Vue from "vue";
// import VueRouter from "vue-router";
import VueRouter from "@/vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "a",
        component: {
          render: () => <h1>home a</h1>,
        },
      },
      {
        path: "b",
        component: {
          render: () => <h1>home b</h1>,
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "a",
        component: {
          render: () => <h1>about a</h1>,
        },
      },
      {
        path: "b",
        component: {
          render: () => <h1>about b</h1>,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.matcher.addRoutes([
  {
    path: "/",
    name: "Home",
    children: [
      {
        path: "c",
        component: {
          render: () => <h1>home c</h1>,
        },
      },
    ],
  },
]);

router.matcher.addRoute({
  path: "/test",
  name: "Test",
});

export default router;

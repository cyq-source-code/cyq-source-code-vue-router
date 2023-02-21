/* eslint-disable no-unused-vars */
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
          render: (h) => <h1>home a</h1>,
        },
      },
      {
        path: "b",
        component: {
          render: (h) => <h1>home b</h1>,
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
          render: (h) => <h1>about a</h1>,
        },
      },
      {
        path: "b",
        component: {
          render: (h) => <h1>about b</h1>,
        },
      },
    ],
  },
];

const router = new VueRouter({
  // mode: "hash",
  mode: "history",
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

// 导航守卫
// “导航”表示路由正在发生改变。

// vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
// 有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

// 参数或查询的改变并不会触发进入/离开的导航守卫。
// 可以通过观察 $route 对象来应对这些变化，或使用 beforeRouteUpdate 的组件内守卫。

router.beforeEach((from, to, next) => {
  console.log("跳页");
  next();
});

export default router;

// 路由钩子的实现
// 项目路由权限（路由钩子 + addRoutes）
// $router(方法 this._router)
// $route(属性 this._route history.current)

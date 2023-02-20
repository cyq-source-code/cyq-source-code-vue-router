import install from "./install";

class VueRouter {
  constructor(options) {
    // 用户传递的路由配置,对这个配置进行路由映射
    console.log(options);
    // let router = options.router;
  }
}

// 1.需要将用户的配置进行映射
// 2.将根实例注入的router属性共享给每个组件

VueRouter.install = install;

export default VueRouter;

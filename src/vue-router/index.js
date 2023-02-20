import createMatcher from "./create-matcher";
import install from "./install";

class VueRouter {
  constructor(options) {
    // 用户传递的路由配置,对这个配置进行路由映射
    console.log(options);
    let routes = options.routes;

    // 变成映射表 方便后续的匹配操作 可以匹配也可以添加一个新的路由

    this.matcher = createMatcher(routes);
  }
}

// 1.需要将用户的配置进行映射
// 2.将根实例注入的router属性共享给每个组件

VueRouter.install = install;

export default VueRouter;

import createMatcher from "./create-matcher";
import HashHistory from "./history/hash";
import BrowserHistory from "./history/history";
import install from "./install";

class VueRouter {
  constructor(options) {
    // 用户传递的路由配置,对这个配置进行路由映射
    console.log(options);
    let routes = options.routes;

    this.beforeEachHooks = [];

    // 变成映射表 方便后续的匹配操作 可以匹配也可以添加一个新的路由
    this.matcher = createMatcher(routes);

    let mode = options.mode;

    if (mode === "hash") {
      this.history = new HashHistory(this);
    } else {
      this.history = new BrowserHistory(this);
    }
  }

  match(location) {
    return this.matcher.match(location);
  }

  push(location) {
    return this.history.push(location);
  }

  beforeEach(cb) {
    this.beforeEachHooks.push(cb);
  }

  init(app) {
    // console.log(app);
    let history = this.history;

    // 根据路径的变化匹配对应组件来进行渲染，路径变了，需要更新视图（响应式的）
    history.transitionTo(history.getCurrrentLocation(), () => {
      history.setupListener(); // 监听路由变化
    });

    // 更新_route，数据变化自动渲染视图
    history.listen((newRoute) => {
      app._route = newRoute;
    });
  }
}

// 1.需要将用户的配置进行映射
// 2.将根实例注入的router属性共享给每个组件

VueRouter.install = install;

export default VueRouter;

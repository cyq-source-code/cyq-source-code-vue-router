function createRoute(record, location) {
  let matched = [];
  if (record) {
    while (record) {
      matched.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...location,
    matched,
  };
}

function runQueue(queue, from, to, cb) {
  function next(index) {
    if (index >= queue.length) return cb();
    let hook = queue[index];
    hook(from, to, () => next(index + 1));
  }
  next(0);
}

class Base {
  constructor(router) {
    this.router = router;

    this.current = createRoute(null, {
      path: "/",
    });
  }
  transitionTo(location, listener) {
    let record = this.router.match(location);
    // console.log(record);

    let route = createRoute(record, { path: location });

    // 当前跳转的路径和我们之前存的一样，而且匹配结果也一样则不再发生跳转
    if (
      location === this.current.path &&
      route.matched.length === this.current.matched.length
    ) {
      return;
    }

    let queue = [].concat(this.router.beforeEachHooks);

    runQueue(queue, this.current, route, () => {
      this.current = route;
      console.log(this.current);

      // 当路由切换时，再调用transitionTo
      listener && listener();
      this.cb && this.cb(route);
    });
  }

  //this._route = newRoute
  listen(cb) {
    this.cb = cb;
  }
}

export default Base;

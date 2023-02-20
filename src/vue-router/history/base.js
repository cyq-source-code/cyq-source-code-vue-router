class Base {
  constructor(router) {
    this.router = router;
  }
  transitionTo(location, listener) {
    let record = this.router.match(location);
    console.log(record);
    // 当路由切换时，再调用transitionTo
    listener && listener();
  }
}

export default Base;

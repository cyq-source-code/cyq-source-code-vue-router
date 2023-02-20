export let Vue;
function install(_Vue) {
  Vue = _Vue; // 将传入的Vue变为全局函数

  // mergeOptions 所有组件初始化都会采用这个方法
  Vue.mixin({
    beforeCreate() {
      // 渲染：从父到子
      if (this.$options.router) {
        this._routerRoot = this; // 根实例
        this._router = this.$options.router;

        this._router.init(this); // this是整个 new Vue
      } else {
        // 在所有组件上都增加一个 _routerRoot 指向根实例
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
      console.log(this);
    },
  });

  // $router
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot && this._routerRoot._router;
    },
  });
  console.log("install");

  Vue.component("router-link", {
    props: {
      to: { type: String, required: true },
      tag: { type: String, default: "a" },
    },
    methods: {
      handler() {
        this.$router.push(this.to);
      },
    },
    render() {
      let tag = this.tag;
      return <tag onClick={this.handler}>{this.$slots.default}111</tag>;
    },
  });

  Vue.component("router-view", {
    render() {
      return <div>vue-router</div>;
    },
  });
}
export default install;

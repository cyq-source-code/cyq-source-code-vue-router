export default {
  functional: true,
  render(h, { parent, data }) {
    // 先渲染App.vue的router-view，再渲染其他页面

    data.routerView = true;

    let route = parent.$route;
    let depth = 0; // 组件层级

    while (parent) {
      // 根据父级 映射
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }

    let record = route.matched[depth];
    if (!record) {
      return h();
    }

    return h(record.component, data);
    // return <div>vue-router</div>;
  },
};

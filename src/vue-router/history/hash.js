import Base from "./base";

function ensureSlash() {
  if (window.location.hash) {
    return;
  }
  window.location.hash = "/";
}
function getHash() {
  return window.location.hash.slice(1);
}

class HashHistory extends Base {
  constructor(router) {
    super(router);

    // 初始化hash路由的时候，要给定一个默认的hash路径 /
    ensureSlash();
  }

  //稍后需要调用此方法，监控hash值的变化
  setupListener() {
    window.addEventListener("hashchange", () => {
      // let hash = getHash();
      // console.log(hash);
      this.transitionTo(getHash());
    });
  }

  getCurrrentLocation() {
    return getHash();
  }
  push(location) {
    this.transitionTo(location, () => {
      window.location.hash = location;
    });
  }
}

export default HashHistory;

import Base from "./base";

class BrowserHistory extends Base {
  constructor(router) {
    super(router);
  }

  setupListener() {
    window.addEventListener("popstate", () => {
      console.log(window.location.pathname);
    });
  }

  getCurrrentLocation() {
    return window.location.pathname;
  }
}

export default BrowserHistory;

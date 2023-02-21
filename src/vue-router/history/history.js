import Base from "./base";

class BrowserHistory extends Base {
  constructor(router) {
    super(router);
  }

  setupListener() {
    window.addEventListener("popstate", () => {
      // console.log(window.location.pathname);
      this.transitionTo(window.location.pathname);
    });
  }

  getCurrrentLocation() {
    return window.location.pathname;
  }

  push(location) {
    this.transitionTo(location, () => {
      history.pushState({}, "", location);
    });
  }
}

export default BrowserHistory;

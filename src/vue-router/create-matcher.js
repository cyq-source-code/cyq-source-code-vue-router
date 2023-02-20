import createRouteMap from "./create-route-map";

function createMatcher(routes) {
  let { pathMap } = createRouteMap(routes);
  console.log("createRouteMap", pathMap);
  function addRoutes(routes) {
    createRouteMap(routes, pathMap);
    console.log("addRoutes", pathMap);
  }
  function addRoute(route) {
    createRouteMap([route], pathMap);
    console.log("addRoute", pathMap);
  }
  function match(localtion) {
    return pathMap[localtion];
  }
  return {
    addRoutes, // 添加多个路由
    addRoute, // 添加一个路由
    match, // 根据路径 返回对应路由
  };
}

export default createMatcher;

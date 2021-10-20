const { bfs } = require('./search');

function getRoute(adjacencyMap, startRoomId, targetRoomsIds) {
  let route = [startRoomId];

  while (targetRoomsIds.length) {
    let targetNode = targetRoomsIds.pop();
    let path = bfs(adjacencyMap, startRoomId, targetNode)
    if (!path) {
      return path;
    }
    // Remove the first element inside the computed path since it is
    // already stored in the route
    path.shift();
    route = route.concat(path);
    start = targetNode;
  }
  return route;
}

module.exports.getRoute = getRoute;
const { bfs } = require('./search');

/**
 * Retrieve the correct route using BFS
 * 
 * @param {Array} adjacencyMap 
 * @param {Number} startRoomId 
 * @param {Array} targetRoomsIds 
 * @returns 
 */
function getRoute(adjacencyMap, startRoomId, targetRoomsIds) {
  let route = [startRoomId];

  while (targetRoomsIds.length) {
    let targetNode = targetRoomsIds.pop();
    let path = bfs(adjacencyMap, startRoomId, targetNode)
    if (!path) {
      return path;
    }
    
    path.shift();
    route = route.concat(path);
    start = targetNode;
  }
  return route;
}

module.exports.getRoute = getRoute;
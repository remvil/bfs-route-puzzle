const { bfs } = require('./search');

/**
 * Retrieve the correct route using BFS
 * 
 * @param {Array} adjacencyMap 
 * @param {Number} startRoomId 
 * @param {Array} targetRoomsIds 
 * @returns 
 */
function getRoute(adjacencyMap, start, targetRoomsIds) {
  let route = [start];

  while (targetRoomsIds.length) {
    let targetNode = targetRoomsIds.pop();
    let path = bfs(adjacencyMap, start, targetNode)
    
    if (!path) {
      return path;
    }
    // console.log(path);
    
    path.shift();
    route = route.concat(path);
    start = targetNode;
  }
  return route;
}

module.exports.getRoute = getRoute;
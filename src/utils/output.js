const collectedItems = [];

/**
 * Print the table that explain the route with objects collected
 * @param {array} route
 * @param {arrat} maze
 * @param {array} objectsToCollect
 */
function printRoutes(route, maze, objectsToCollect, idsIndexesMap) {
  process.stdout.write("\nID\tRoom\t\tObject collected\n");
  process.stdout.write("----------------------------------------");

  route.forEach(roomId => {
    process.stdout.write("\n" + roomId + "\t" + maze[roomId].name + "\t");
    if (!hasWhiteSpace(maze[roomId].name)) process.stdout.write("\t");

    let objectsInRoom = maze[roomId].objects;

    if (objectsInRoom.length < 1) {
      process.stdout.write("None");
    } else {
      getObjects(objectsInRoom, objectsToCollect);
    }
  });
  process.stdout.write("\n");

  return 0;
}


/**
 * get Objects if objects to collect are in the room
 * @param {array} objectsInRoom
 * @param {array} toCollect
 */
function getObjects(objectsInRoom, objectsToCollect) {
  let printNone = true;
  objectsInRoom.forEach(currentObject => {
    if (
      objectsToCollect.includes(currentObject.name) &&
      !collectedItems.includes(currentObject.name)
    ) {
      process.stdout.write(currentObject.name + " ");
      collectedItems.push(currentObject.name);
      printNone = false;
    }
  });

  if (printNone) {
    process.stdout.write("None");
  }

  return collectedItems;
}

/* TODO da migliorare
 Fix per correggere il problema della formattazione
*/
function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

module.exports = {
  printRoutes: printRoutes,
  getObjects: getObjects
};

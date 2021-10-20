const printed = [];

/**
 * Print the table that explain the route with objects collected
 * @param {array} route
 * @param {arrat} roomsMap
 * @param {array} toCollect
 */
function printRoutes(route, roomsMap, objectsToCollect, idsIndexesMap) {
  process.stdout.write("\nID\tRoom\t\tObject collected\n");
  process.stdout.write("----------------------------------------");

  route.forEach(roomId => {
    process.stdout.write("\n" + roomId + "\t" + roomsMap[idsIndexesMap[roomId]].name + "\t");
    if (!hasWhiteSpace(roomsMap[idsIndexesMap[roomId]].name)) process.stdout.write("\t");

    let objectsInRoom = roomsMap[idsIndexesMap[roomId]].objects;

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
 *
 * @param {array} objectsInRoom
 * @param {array} toCollect
 */
function getObjects(objectsInRoom, objectsToCollect) {
  let printNone = true;

  // console.log('====================================');
  // console.log(objectsInRoom);
  // console.log('====================================');
  // process.exit();
  objectsInRoom.forEach(currentObject => {
    if (
      objectsToCollect.includes(currentObject.name) &&
      !printed.includes(currentObject.name)
    ) {
      process.stdout.write(currentObject.name + " ");
      printed.push(currentObject.name);
      printNone = false;
    }
  });

  if (printNone) {
    process.stdout.write("None");
  }

  return printed;
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

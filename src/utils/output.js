"use strict";

const printed = [];

/**
 * s
 * @param {array} route
 * @param {arrat} roomsMap
 * @param {array} toCollect
 */
function printResult(route, roomsMap, toCollect) {
  process.stdout.write("\nID\tRoom\t\tObject Collected\n");
  process.stdout.write("----------------------------------------");

  route.forEach(roomId => {
    process.stdout.write("\n" + roomId + "\t" + roomsMap[roomId].name + "\t");
    if (!hasWhiteSpace(roomsMap[roomId].name)) process.stdout.write("\t");

    let objectsInRoom = roomsMap[roomId].objects;
    if (objectsInRoom.length < 1) {
      process.stdout.write("None");
    } else {
      getObjects(objectsInRoom, toCollect);
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
function getObjects(objectsInRoom, toCollect) {
  let printNone = true;

  objectsInRoom.forEach(currentObject => {
    if (
      toCollect.includes(currentObject.name) &&
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
 Hack per correggere il problema della formattazione
*/
function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

module.exports = {
  printResult: printResult,
  getObjects: getObjects
};

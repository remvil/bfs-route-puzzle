const fs = require("fs");

const maze = [];
const adjacencyMap = [];
const objectsMap = [];
const idsIndexesMap = [];

/**
 * Read the file
 * @param {string} filePath
 */
function readData(filePath) {
  return fs.readFileSync(filePath);
}

/**
 * Parse the data into a JSON object
 * @param {string} data
 */
function parseJson(data) {
  return JSON.parse(data);
}

/**
 * Ceates maze, adjacencyMap and ObjectMap needed to solve the puzzle
 * @param {object} map
 */
function initDataStructures(map) {
  map.rooms.forEach((currentRoom) => {
    createMaze(currentRoom);
    createAdjacencyMap(currentRoom);
    createObjectsMap(currentRoom);
  });

  console.log(idsIndexesMap);
  return;
}

/**
 * creates an array of JSObject it creates a map of indexes and rooms id
 * @param {Array} maze
 */
function createMaze(room) {
  // maze[room.id] = room;
  maze.push(room);
  idsIndexesMap[room.id - 1] = room.id;
  return maze;
}

/**
 * creates the adjaceny matrix
 * the elements of the matrix indicate whether pairs of vertices
 * are adjacent or not in the graph.
 *
 * @param {object} room
 */
function createAdjacencyMap(room) {
  // adjacencyMap[room.id] = setRoomNeighbors(room);
  adjacencyMap.push(setRoomNeighbors(room));
  return adjacencyMap;
}

/**
 * Sets the neighbor for the given room
 * @param {object} room
 */
function setRoomNeighbors(room) {
  let neighbors = [];

  if (room.north) {
    neighbors[room.north] = 1;
  }
  if (room.south) {
    neighbors[room.south] = 1;
  }
  if (room.west) {
    neighbors[room.west] = 1;
  }
  if (room.east) {
    neighbors[room.east] = 1;
  }

  return neighbors;
}

/**
 * Creates an array of JSObject
 * Each element represent a pair <object.name: room.id>
 * @param {object} room
 */
function createObjectsMap(room) {
  if (room.objects.length) {
    room.objects.forEach((object) => {
      objectsMap[object.name] = room.id;
    });
  }

  return objectsMap;
}

/**
 * Creates an array that assosciate each object to the room.id
 * @param {array} objects
 */
function getObjectsRooms(objects) {
  let nodes = [];
  objects.forEach((currentObject) => {
    if (
      objectsMap[currentObject] &&
      !nodes.includes(objectsMap[currentObject])
    ) {
      nodes.push(objectsMap[currentObject]);
    }
  });

  return nodes;
}

const getAdjacencyMap = () => adjacencyMap;

const getObjectsMap = () => objectsMap;

const getMazeMap = () => maze;

const getidsIndexesMap = () => idsIndexesMap;

module.exports = {
  readData: readData,
  parseJson: parseJson,
  createMaze: createMaze,
  createAdjacencyMap: createAdjacencyMap,
  setRoomNeighbors: setRoomNeighbors,
  createObjectsMap: createObjectsMap,
  initDataStructures: initDataStructures,
  getObjectsRooms: getObjectsRooms,
  getAdjacencyMap: getAdjacencyMap,
  getMazeMap: getMazeMap,
  getidsIndexesMap: getidsIndexesMap,
  getObjectsMap: getObjectsMap,
};

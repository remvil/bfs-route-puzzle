const { read } = require('./src/utils/input');
const ds = require('./src/utils/dsUtils');
const validators = require('./src/utils/validators');
const { getRoute } = require('./src/routes/route');
const { isRouteEmpty } = require('./src/routes/validator');
const output = require('./src/utils/output');

const dotenv = require('dotenv');
dotenv.config();

const args = read();
const mazeFile = args[process.env.ARGS_INDEX_MAZE_FILE];
const startRoomId = args[process.env.ARGS_INDEX_ROOM];
const objectsList = args.slice(process.env.ARGS_INDEX_FIRST_OBJECT);

const jsonFile = ds.readData(mazeFile);
const mazeObj = ds.parseJson(jsonFile);

// Create all the support data structures
ds.initDataStructures(mazeObj);
const mazeMap = ds.getMazeMap();
const idsIndexesMap = ds.getidsIndexesMap();
const targetRooms = ds.getObjectsRooms(objectsList);
const objectsMap = ds.getObjectsMap();

// Validate map and object Map
validators.isRoomInMaze(startRoomId, mazeMap);
validators.theresObjectsInMaze(objectsList, objectsMap);

const adjacencyMap = ds.getAdjacencyMap();

const route = getRoute(adjacencyMap, startRoomId, targetRooms);
isRouteEmpty(route);

output.printRoutes(route, mazeMap, objectsList, idsIndexesMap);
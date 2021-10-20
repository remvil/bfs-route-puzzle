const dotenv = require('dotenv');
dotenv.config();

process.exitCode = 0;
/**
 * Checks if the min args is satisfied
 * @param {array} inputArgs used to call the script
 */
function isMinArgsSatisfied(inputArgs) {
  if (inputArgs.length < process.env.MIN_ARGS) {
    process.stderr.write(
      "\nError : You should specify at least two parameters\n[you should pass room id before, then objects to find]\n"
    );
    process.exitCode = process.env.EXIT_ERROR_CODE;
    process.exit(process.env.EXIT_ERROR_CODE);
  }
}

/**
 * Checks if start room is a valid number (e.g. an integer)
 * @param {string} roomNumber provided as input argument
 */
function isRoomANumber(roomNumber) {
  let start = Number(roomNumber);
  if (start < 1 || !Number.isInteger(start)) {
    process.stderr.write("\nError : Start room is not a valid number.\n[you should pass room id before, then objects to find]\n");
    process.exitCode = process.env.EXIT_ERROR_CODE;
    process.exit(process.env.EXIT_ERROR_CODE);
  }
}

/**
 * Checks if the provided start room is contained inside the maze
 * @param {number} roomId 
 * @param {array} maze 
 */
function isRoomInMaze(roomId, maze) {
  if(!maze[roomId]){
    process.stderr.write("\nError : the starting room `" + roomNumber + "` is not in the maze\n");
    process.exitCode = process.env.EXIT_ERROR_CODE;
    process.exit(process.env.EXIT_ERROR_CODE);
  }
}

/**
 * Checks if the provided objects to collcet are contained inside the maze
 * @param {array} objectList list of searching objects
 * @param {array} objectsMap objects contained inside the maze
 */
function theresObjectsInMaze(objectList, objectsMap) {
  objectList.forEach((object) => {
    if (!objectsMap[object]) {
      process.stderr.write("\nError : Cannot find a route\n");
      process.exitCode = process.env.EXIT_ERROR_CODE;
      process.exit(process.env.EXIT_ERROR_CODE);
    }
  });
}

module.exports = {
  isMinArgsSatisfied: isMinArgsSatisfied,
  isRoomANumber: isRoomANumber,
  isRoomInMaze: isRoomInMaze,
  theresObjectsInMaze: theresObjectsInMaze
};

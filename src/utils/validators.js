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
      "\nError : You should specify at least two parameters\n"
    );
    process.exitCode = process.env.EXIT_CODE;
    process.exit(process.env.EXIT_CODE);
  }
}

/**
 * Checks if start room is a valid number (e.g. an integer)
 * @param {string} roomNumber provided as input argument
 */
function isRoomANumber(roomNumber) {
  let start = Number(roomNumber);
  if (start < 1 || !Number.isInteger(start)) {
    process.stderr.write("\nError : Start room is not a valid number\n");
    process.exitCode = process.env.EXIT_CODE;
    process.exit(process.env.EXIT_CODE);
  }
}

/**
 * Checks if the provided start room is contained inside the maze
 * @param {number} room id provided as input
 * @param {array} maze 
 */
function isRoomInMaze(roomNumber, maze) {
  if (maze.findIndex( x => x.id == roomNumber) === -1 ) {
    process.stderr.write("\nError : the starting room `" + roomNumber + "` is not in the maze\n");
    process.exitCode = process.env.EXIT_CODE;
    process.exit(process.env.EXIT_CODE);
  }
}

/**
 * Checks if the provided objects to collcet are contained inside the maze
 * @param {array} toCollect objects to be collected
 * @param {array} objectsMap objects contained inside the maze
 */
function theresObjectsInMaze(toCollect, objectsMap) {
  toCollect.forEach((object) => {
    if (!objectsMap[object]) {
      process.stderr.write("\nError : Cannot find a route\n");
      process.exitCode = process.env.EXIT_CODE;
      process.exit(process.env.EXIT_CODE);
    }
  });
}

module.exports = {
  isMinArgsSatisfied: isMinArgsSatisfied,
  isRoomANumber: isRoomANumber,
  isRoomInMaze: isRoomInMaze,
  theresObjectsInMaze: theresObjectsInMaze,
};

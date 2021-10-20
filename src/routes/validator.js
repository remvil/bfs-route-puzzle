const dotenv = require('dotenv');
dotenv.config();

process.exitCode = 0;

/**
 * Check if array containing routes is empty
 * @param {array} route 
 */
 function isRouteEmpty(route) {
  if (!route) {
    process.stderr.write("\nError : Cannot find a route\n");
    process.exitCode = process.env.EXIT_ERROR_CODE;
    process.exit(process.env.EXIT_ERROR_CODE);
  }
}

module.exports = {
  isRouteEmpty: isRouteEmpty
};
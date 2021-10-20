const validator = require("./validators");
const dotenv = require('dotenv');
dotenv.config();

function read() {
  let inputArgs = process.argv.slice(process.env.MIN_ARGS);
  validator.isMinArgsSatisfied(process.argv.slice(2));
  validator.isRoomANumber(inputArgs[process.env.ARGS_INDEX_ROOM]);

  return inputArgs;
}

module.exports.read = read;

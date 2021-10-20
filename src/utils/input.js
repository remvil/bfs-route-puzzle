const validator = require("./validators");
const dotenv = require('dotenv');
dotenv.config();

function read() {
  let inputArgs = process.argv.slice(process.env.MIN_ARGS);
  validator.minArgsSatisfied(process.argv.slice(2));
  validator.isStartRoomNumber(inputArgs[process.env.START_ROOM_INDEX]);

  return inputArgs;
}

module.exports.read = read;

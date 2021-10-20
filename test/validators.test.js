"use strict";

const assert = require("assert");
const validator = require("../src/utils/validators");

const objsArr = ["Knife", "Potted Plant"];
const object = "Knife";
const mapObjs = { Knife: 3, "Potted Plant": 4 };
const initialRoom = 2;
const inexistentRoom = 679;
const maze = [
  { id: 1, name: "Hallway", north: 2, objects: [] },
  { id: 2, name: "Dining Room", south: 1, west: 3, east: 4, objects: [] },
  { id: 3, name: "Kitchen", east: 2, objects: [{ name: "Knife" }] },
  { id: 4, name: "Sun Room", west: 2, objects: [{ name: "Potted Plant" }] }
];

describe("Validators", function() {

  describe("#isMinArgsSatisfied()", function() {
    it("should execute without error if provide at least two input arguments for the script", function() {
      validator.isMinArgsSatisfied(["maze", 2]);
      assert.equal(0, process.exitCode);
    });
    // it("should exit with error code 1 if the script it's executed with less than 2 arguments", function() {
    //   validator.isMinArgsSatisfied(["maze"]);
    //   assert.equal(1, process.exitCode);
    // });
  });

  describe("#isRoomANumber()", function() {
    it("should execute without error if start room is inside the map", function() {
      validator.isRoomANumber(initialRoom, maze);
      assert.equal(0, process.exitCode);
    });
    // it("should exit with error code 1 if start room is not inside the map", function() {
    //   validator.isRoomANumber("1", maze);
    //   assert.equal(0, process.exitCode);
    // });
  });

  describe("#isRoomInMaze()", function() {
    it("should execute without error if start room is inside the map", function() {
      validator.isRoomInMaze(initialRoom, maze);
      assert.equal(0, process.exitCode);
    });
    // it("should exit with error code 1 if start room is not a number", function() {
    //   validator.isRoomInMaze("ZXC", maze);
    //   assert.equal(1, process.exitCode);
    // });
    // it("should exit with error code 1 if start room is not a number", function() {
    //   validator.isRoomInMaze(inexistentRoom, maze);
    //   assert.equal(1, process.exitCode);
    // });
  });

  describe("#theresObjectsInMaze()", function() {
    it("should execute without error if test objects to collect are inside the map", function() {
      validator.theresObjectsInMaze(objsArr, mapObjs);
      assert.equal(0, process.exitCode);
    });
    // it("should exit with error code if test objects to collect are not inside the map", function() {
    //   validator.theresObjectsInMaze(["Bubbles", "Glass"], mapObjs);
    //   assert.equal(1, process.exitCode);
    // });
  });
});

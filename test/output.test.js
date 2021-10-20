"use strict";

const assert = require("assert");
const funcs = require("../src/utils/output");

const route = [2, 4, 2, 3];
const maze = [
  {},
  { id: 1, name: "Hallway", north: 2, objects: [] },
  { id: 2, name: "Dining Room", south: 1, west: 3, east: 4, objects: [] },
  { id: 3, name: "Kitchen", east: 2, objects: [{ name: "Knife" }] },
  { id: 4, name: "Sun Room", west: 2, objects: [{ name: "Potted Plant" }] }
];
const toCollect = ["Knife", "Potted Plant"];

describe("Print", function() {
  describe("#getObjects()", function() {
    it("should execute without error returning 0", function() {
      assert.equal(0, funcs.printResult(route, maze, toCollect));
    });
  });
});

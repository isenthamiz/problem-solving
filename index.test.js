const assert = require("assert");
const pascalsTriangle = require("./index");

describe("Pascals Triangle Problem", function () {
  it("Should return a array of pascals triangle values for the given N number", function () {
    let matrix = pascalsTriangle(6);
    assert.equal(matrix.length, 6);
  });
});

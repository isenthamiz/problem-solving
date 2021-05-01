const generateParenthesis = require("../src/backtracking/generateParenthesis");
const expect = require("chai").expect;

describe("Backtracking", function () {
  it("Generate All Combination of Valid Parentheses for Given N", function () {
    let inputN = 3;
    let outputArr = ["((()))", "(()())", "(())()", "()()()", "()(())"];
    let resultArr = generateParenthesis(inputN);
    expect(resultArr).to.have.all.members(outputArr);
  });
});

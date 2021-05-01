const slidingWindow = require("../src/sliding-window/SlidingWindow");
const expect = require("chai").expect;

describe("Sliding Window Problems", function () {
  it("Longest Repeating Character Replacement", function () {
    let inputStr = "AABABBA";
    let inputK = 1;
    let expectedOutput = 4;
    let resultOutput = slidingWindow.characterReplacement(inputStr, inputK);
    expect(resultOutput).to.be.equals(expectedOutput);
  });

  it("Longest Substring Without Repeating Characters", function () {
    let inputStr = "pwwkew";
    let expectedOutput = 3;
    let resultOutput = slidingWindow.lengthOfLongestSubstring(inputStr);
    expect(resultOutput).to.be.equals(expectedOutput);
  });

  it("Averate of Sub Array with Size K", function () {
    let inputArr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
    let inputK = 5;
    let expectedOutput = [2.2, 2.8, 2.4, 3.6, 2.8];
    let resultOutput = slidingWindow.find_average_of_subarray(inputArr, inputK);
    expect(resultOutput).to.deep.equals(expectedOutput);
  });
});

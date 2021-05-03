const expect = require("chai").expect;
const Trie = require("../src/trie/searchWord");

describe("Trie Datastructure", function () {
  let testTrie;

  before(function () {
    testTrie = new Trie();
    let inputWords = [
      "Thamizh",
      "Thamarai",
      "Tharamani",
      "Jaya",
      "Jayapriya",
      "Jayaprakash",
      "Senthamiz",
    ];
    for (let word of inputWords) {
      testTrie.addWord(word);
    }
  });

  it("List All words for the given Prefix", function () {
    let inputPrefix = "Tha";
    let outputWords = ["Thamizh", "Thamarai", "Tharamani"];

    let resultset = testTrie.searchByPrefix(inputPrefix);
    expect(resultset).to.be.deep.equals(outputWords);
  });

  it("Return empty array if there is not prefix available", function () {
    let inputPrefix = "abc";

    let resultset = testTrie.searchByPrefix(inputPrefix);
    expect(resultset).is.empty;
  });
});

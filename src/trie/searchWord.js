class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => (this.end = true);
    this.isEnd = () => this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    const helper = function (word, node) {
      if (!word) {
        node.setEnd();
        return;
      }
      if (!node.keys.has(word[0])) {
        node.keys.set(word[0], new Node());
      }
      helper(word.substr(1), node.keys.get(word[0]));
    };

    helper(word, this.root);
  }

  search(word) {
    let node = this.root;
    while (word.length > 1) {
      if (node.keys.has(word[0])) {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      } else {
        return false;
      }
    }

    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  }

  searchByPrefix(prefix) {
    let node = this.root;
    let word = prefix;
    let resultset = [];
    while (word.length > 1) {
      if (node.keys.has(word[0])) {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      } else {
        return resultset;
      }
    }
    this._helperSearchPrefix(node.keys.get(word), prefix, resultset);
    return resultset;
  }

  _helperSearchPrefix(node, prefix, resultset) {
    if (node.isEnd()) {
      resultset.push(prefix);
    }
    for (let [key, value] of node.keys.entries()) {
      this._helperSearchPrefix(value, prefix + key, resultset);
    }
  }
}

module.exports = Trie;

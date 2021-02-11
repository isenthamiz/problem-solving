class Node {
  constructor() {
    this.key = new Map();
    this.end = false;
  }

  isEnd() {
    return this.end;
  }

  setEnd() {
    this.end = true;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    const helper = function (str, node) {
      if (!str) {
        node.setEnd();
        return;
      }

      if (node.key.get(str[0])) {
        helper(str.substr(1), node.key.get(str[0]));
      } else {
        node.key.set(str[0], new Node());
        helper(str.substr(1), node.key.get(str[0]));
      }
    };
    helper(str, this.root);
  }

  searchAd(str, node) {
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      if (!node.key.get(ch)) {
        if (ch == ".") {
          for (let k of node.key.keys()) {
            let child = node.key.get(k);
            if (this.searchAd(str.substr(i + 1), child)) {
              return true;
            }
          }
        }
        return false;
      } else {
        node = node.key.get(ch);
      }
    }

    return node.isEnd();
  }

  search(str) {
    let node = this.root;
    while (str.length > 1) {
      if (node.key.get(str[0])) {
        node = node.key.get(str[0]);
        str = str.substr(1);
      } else {
        return false;
      }
    }
    let n = node.key.get(str);
    return n && n.isEnd() ? true : false;
  }

  searchAll(prefix) {
    const helper = function (node, prefix) {
      if (node.isEnd()) {
        result.push(prefix);
      }
      for (let [ch, N] of node.key) {
        helper(N, prefix + ch);
      }
    };

    let node = this.root;
    let S = prefix;
    let result = [];
    while (S.length) {
      if (node.key.get(S[0])) {
        node = node.key.get(S[0]);
        S = S.substr(1);
      } else {
        return result;
      }
    }
    helper(node, prefix);
    return result;
  }
}

let t = new Trie();

t.insert("Senthamiz");
t.insert("Sent");
t.insert("Sentha");
t.insert("Senthamarai");

console.log(t.searchAd("..nt", t.root));

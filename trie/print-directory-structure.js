const fileArr = [
  "root/work/important/file1.txt",
  "root/home/file2.txt",
  "root/work/js/file3.txt",
  "root/work/js/file4.txt",
  "root/work/important/a/file5.txt",
  "home/picture/1.png",
  "home/video/1.mpg",
];

class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(strArr, root = this.root) {
    if (!strArr.length) {
      root.setEnd();
      return;
    }
    let f = strArr.shift();
    if (root.keys.has(f)) {
      this.insert(strArr, root.keys.get(f));
    } else {
      root.keys.set(f, new Node());
      this.insert(strArr, root.keys.get(f));
    }
  }

  printAll(root = this.root) {
    if (root.isEnd()) {
      return;
    }
    for (let file of root.keys) {
      console.log(file[0]);
      this.printAll(file[1]);
    }
  }
}

const printFile = function (arr) {
  let t = new Trie();
  for (let f of arr) {
    t.insert(f.split("/"));
  }
  t.printAll();
};

printFile(fileArr);

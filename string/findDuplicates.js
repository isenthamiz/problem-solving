const paths = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];

const findDuplicates = function (paths) {
  let hmap = new Map();
  let result = [];
  for (let path of paths) {
    let values = path.split(" ");
    for (let j = 1; j < values.length; j++) {
      [filename, filecontent] = values[j].split("(");
      filecontent = filecontent.replace(")", "");
      if (hmap.has(filecontent)) {
        hmap.get(filecontent).push(values[0] + "/" + filename);
      } else {
        hmap.set(filecontent, [values[0] + "/" + filename]);
      }
    }
  }
  for (let v of hmap.values()) {
    result.push(v);
  }
  return result;
};

findDuplicates(paths);

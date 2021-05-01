const arr = [1, 1, 2];

const permuteUnique = function (nums) {
  const helper = function (n, hmap, comp, result) {
    if (comp.length == n) {
      result.push([...comp]);
      return;
    }

    for (let [key, value] of hmap.entries()) {
      if (value == 0) {
        continue;
      }
      comp.push(key);
      hmap.set(key, hmap.get(key) - 1);
      helper(n, hmap, comp, result);
      comp.pop();
      hmap.set(key, value);
    }
  };

  let hmap = new Map();
  let result = [],
    comp = [],
    n = nums.length;
  for (num of nums) {
    if (!hmap.has(num)) {
      hmap.set(num, 1);
    } else {
      hmap.set(num, hmap.get(num) + 1);
    }
  }
  helper(n, hmap, comp, result);
  console.log(result);
};

permuteUnique(arr);

const arr = [1, 2, 3];

const findSubSets = function (nums) {
  let subsets = [];
  subsets.push([]);

  for (let i = 0; i < nums.length; i++) {
    let curr_num = nums[i];

    let n = subsets.length;
    for (let j = 0; j < n; j++) {
      let set1 = subsets[j].slice(0);
      set1.push(curr_num);
      subsets.push(set1);
    }
  }

  return subsets;
};

console.log(findSubSets(arr));

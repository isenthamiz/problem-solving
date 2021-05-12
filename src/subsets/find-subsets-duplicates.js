const arr = [1, 3, 3];

const findSubSets = function (nums) {
  nums.sort((a, b) => a - b);
  let subsets = [],
    startIndex = 0,
    endInex = 0;
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let curr_num = nums[i];
    startIndex = 0;
    if (i > 0 && nums[i - 1] == nums[i]) {
      startIndex = endInex + 1;
    }
    endInex = subsets.length - 1;

    for (let j = startIndex; j < endInex + 1; j++) {
      let set1 = subsets[j].slice(0);
      set1.push(curr_num);
      subsets.push(set1);
    }
  }
  return subsets;
};

console.log(findSubSets(arr));

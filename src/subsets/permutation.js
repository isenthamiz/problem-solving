const arr = [1, 2, 3];

const getPermutation = function (nums) {
  let result = [],
    permutation = [];
  permutation.push([]);

  for (let i = 0; i < nums.length; i++) {
    let curr_num = nums[i];
    let n = permutation.length;
    for (let j = 0; j < n; j++) {
      let old_permutation = permutation.shift();
      for (let k = 0; k <= old_permutation.length; k++) {
        let new_permutation = old_permutation.slice(0);
        new_permutation.splice(k, 0, curr_num);
        if (new_permutation.length == nums.length) {
          result.push(new_permutation);
        } else {
          permutation.push(new_permutation);
        }
      }
    }
  }

  return result;
};

console.log(getPermutation(arr));

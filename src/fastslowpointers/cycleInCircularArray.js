const circular_array_loop_exists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let is_forword = arr[i] >= 0;
    let slow = i,
      fast = i;

    while (true) {
      slow = findNextIndex(arr, is_forword, slow);
      fast = findNextIndex(arr, is_forword, fast);
      if (fast != -1) {
        fast = findNextIndex(arr, is_forword, fast);
      }

      if (slow == -1 || fast == -1 || slow == fast) {
        break;
      }
    }

    if (slow != -1 && slow == fast) {
      return true;
    }
  }
  return false;
};

const findNextIndex = function (arr, is_forword, current_i) {
  let direction = arr[current_i] >= 0;
  if (direction != is_forword) {
    return -1;
  }
  let next_index = (current_i + arr[current_i]) % arr.length;

  if (next_index < 0) {
    next_index += arr.length;
  }

  if (next_index == current_i) {
    return -1;
  }

  return next_index;
};

const arr = [4, 1, 8, 7];

const game24 = function (arr) {
  let cards = arr;
  const helper = (cards) => {
    if (cards.length == 0) {
      return false;
    }
    if (cards.length == 1) {
      return Math.abs(cards[0] - 24) < 0.0000001;
    }

    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        let tmp = [];

        for (let k = 0, index = 0; k < cards.length; k++) {
          if (k != i && k != j) {
            tmp[index++] = cards[k];
          }
        }

        for (let d of compute(cards[i], cards[j])) {
          tmp.push(d);
          if (helper(tmp)) {
            return true;
          }
          tmp.pop();
        }
      }
    }

    return false;
  };

  const compute = (x, y) => {
    return [x + y, x - y, y - x, x * y, x / y, y / x];
  };

  return helper(cards);
};

console.log(game24(arr));

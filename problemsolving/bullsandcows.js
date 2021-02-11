const num1 = "1231";
const num2 = "0111";

const bullsandcows = function (secret, guess) {
  let hmap = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (!hmap.has(secret[i])) {
      hmap.set(secret[i], 1);
    } else {
      hmap.set(secret[i], hmap.get(secret[i]) + 1);
    }
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == secret[i]) {
      bulls++;
      if (hmap.get(guess[i]) == 0) {
        cows--;
      } else {
        hmap.set(guess[i], hmap.get(guess[i]) - 1);
      }
    } else {
      if (secret.indexOf(guess[i]) > -1 && hmap.get(guess[i]) > 0) {
        cows++;
        hmap.set(guess[i], hmap.get(guess[i]) - 1);
      }
    }
  }

  return bulls + "A" + cows + "B";
};

console.log(bullsandcows(num1, num2));

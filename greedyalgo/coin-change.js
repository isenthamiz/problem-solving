const change = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
const R = 2044;

const getChange = function (change, R) {
  let noofcoins = 0;
  for (let i = change.length - 1; i >= 0; i--) {
    let rupees = Math.floor(R / change[i]);
    let remaining = R % change[i];
    noofcoins += rupees;
    R = remaining;
  }
  console.log(noofcoins);
};

getChange(change, R);

const coinChange = function (change, R) {
  let noofcoins = 0;
  while (R) {}
};

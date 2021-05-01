const str = "Zebra-493";

const rotationalCipher = function (input, rotationFactor) {
  const mapAlphabets = function (map) {
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);
    map.set("d", 4);
    map.set("e", 5);
    map.set("f", 6);
    map.set("g", 7);
    map.set("h", 8);
    map.set("i", 9);
    map.set("j", 10);
    map.set("k", 11);
    map.set("l", 12);
    map.set("m", 13);
    map.set("n", 14);
    map.set("o", 15);
    map.set("p", 16);
    map.set("q", 17);
    map.set("r", 18);
    map.set("s", 19);
    map.set("t", 20);
    map.set("u", 21);
    map.set("v", 22);
    map.set("w", 23);
    map.set("x", 24);
    map.set("y", 25);
    map.set("z", 0);
  };

  const getChar = function (num) {
    for ([ch, i] of alphaMap.entries()) {
      if (num == i) {
        return ch;
      }
    }
    return "";
  };

  const alphaMap = new Map();
  mapAlphabets(alphaMap);
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (alphaMap.has(ch.toLowerCase())) {
      let uCase = ch == ch.toUpperCase() ? true : false;
      let r = (alphaMap.get(ch.toLowerCase()) + rotationFactor) % 26;
      output += uCase ? getChar(r).toUpperCase() : getChar(r);
    } else if (!isNaN(parseInt(ch))) {
      let r = (parseInt(ch) + rotationFactor) % 10;
      output += r;
    } else {
      output += ch;
    }
  }
  console.log(output);
};

rotationalCipher(str, 3);

const str = "mississippi";
const pattern = "mi*i*p";

const validateString = function (s, p) {
  if (!s && !p) {
    return true;
  }
  if (!s || !p) {
    return false;
  }

  if (s[0] == p[0] || p[0] == "?") {
    return validateString(s.substr(1), p.substr(1));
  } else if (p[0] == "*") {
    return (
      validateString(s.substr(1), p) || validateString(s.substr(1), p.substr(1))
    );
  } else {
    return false;
  }
};

console.log(validateString(str, pattern));

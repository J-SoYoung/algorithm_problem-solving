let s = "a234";
// let s = "1234";

function isNumber(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const regEx = /^\d+$/;
  return regEx.test(s);
}

function solution(s) {
  var answer = true;
  return (answer = isNumber(s));
}

solution(s);

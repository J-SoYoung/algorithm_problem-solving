let n = 118372;

function solution(n) {
  var answer = 0;

  return (answer = Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  ));
}

solution(n);

let a = 3;
let b = 5;

function solution(a, b) {
  var answer = 0;
  if (a > b) {
    let c = a;
    a = b;
    b = c;
  }

  for (let i = a; i <= b; i++) {
    if (a === b) answer = a;
    else answer += i;
  }

  console.log(answer);
  return answer;
}

solution(a, b);

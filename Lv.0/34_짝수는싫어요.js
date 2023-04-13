// 정수 n 이하의 홀수가 오름차순으로 담긴 배열을 return 하라

let n = 15;

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }
  console.log(answer);
  return answer;
}

solution(n);

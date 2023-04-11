//두 개의 숫자를 곱해 주어진 n의 결과가 나오도록 순서쌍을 구하라

let n = 100;
function solution(n) {
  var answer = 0;
  let result = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
    answer = result.length;
  }
  console.log(answer);
  return answer;
}

solution(n);

// 주어진 n이 나누어 떨어지는 숫자를 구해서 순서쌍을 만들 수 있다.
// 문제는 순서쌍을 구하는 것이 아니라, 순서쌍의 개수를 구하는 것이므로
// 나눠 떨어지는 수의 갯수를 구하면 됨!

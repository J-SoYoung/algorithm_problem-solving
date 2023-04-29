// https://school.programmers.co.kr/learn/courses/30/lessons/120909
// 제곱수 구하기

let n = 144;

function solution(n) {
  var answer = "";
  const num = Math.sqrt(n);
  num % 1 ? (answer = 2) : (answer = 1);
  return answer;
}

solution(n);

// 제곱근을 구할 수 있는 메서드를 활용하여 제곱근을 구한다
// 제곱근을 구하는 메서드는 주어진 숫자를 소수점으로 나눠서 제곱근을 구하기 때문에
// 제곱근으로 나온 수가 자연수인지 확인하는 방법이 필요하다 .
// 1로 나눠서 나머지가 있으면 그것은 소수점 이하 숫자이기 때문에
// 삼항연산자를 통해 결과값을 1,2로 반환하였다

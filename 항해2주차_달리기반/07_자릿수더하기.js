// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

// let n = 123;
let n = 987;

function solution(n) {
  let answer = 0;
  n = n + "";

  for (let i = 0; i < n.length; i++) {
    answer += +n[i];
  }
  console.log(answer);
  return answer;
}

solution(n);

// 각 자리수의 합을 구해야 한다.
// 문자열은 유사배열 객체이면서 이터러블이기 때문에
// 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있고, length프로퍼티를 사용할 수 있다.

// n을 문자열로 변환 후, for문을 돌면서  n의 각 문자를 더한다.
// 연산을 할 때는 다시 숫자형으로 바꿔야 덧셈이 가능하다.
// 문자열로 더할 경우 숫자들의 덧셈이 아닌 문자열 연결이 되기 때문이다.

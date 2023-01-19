// https://school.programmers.co.kr/learn/courses/30/lessons/120910
// 1시간에 두배만큼 증식하는 세균이 있다고 합니다.
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성

// let n = 2;
// let t = 10;
let n = 7;
let t = 15;

function solution(n, t) {
  var answer = 0;
  for (let i = 1; i <= t; i++) {
    answer = n *= 2;
    console.log(answer);
  }
  return answer;
}
solution(n, t);

// for문의 사용법을 잠시 까먹고 있었다.
// i ~ t번까지 반복을 돌면서 결과를 낸다.
// 문제는 n이 2배씩 t번까지 증가하는 식을 도출해야 하는 문제였는데, 자꾸 제곱을 했네ㅎㅎㅎ

// https://school.programmers.co.kr/learn/courses/30/lessons/181899
// start와 end까지 1씩 감소하는 숫자 배열을 만들어라

let start = 10;
let end = 3;

function solution(start, end) {
  var answer = [];
  for (let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
}

solution(start, end);

// 처음과 끝의 범위가 주어졌고, 
// 1씩 감속하는 숫자리스트를 배열에 추가하여 문제를 해결
// 배열 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/120821
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// let num_list = [1, 2, 3, 4, 5];
// let num_list = [1, 1, 1, 1, 1, 2];
let num_list = [1, 0, 1, 1, 1, 3, 5];

function solution(num_list) {
  var answer = [];
  answer = num_list.reverse();
  console.log(answer);
  return answer;
}

solution(num_list);

// 배열 뒤집기 메소드 reverse()

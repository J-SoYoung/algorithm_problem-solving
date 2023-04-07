// https://school.programmers.co.kr/learn/courses/30/lessons/120824

let num_list = [1, 3, 5, 7];

function solution(num_list) {
  var answer = [];
  const odd = num_list.filter((num) => num % 2 === 0).length;
  answer.push(odd, num_list.length - odd);
  return answer;
}

solution(num_list);

// 주어진 배열에서 짝수와 홀수의 개수를 찾아라.
// 짝수를 찾고, 전체 개수 - 짝수개수 = 홀수개수
// answer배열에 추가하라.

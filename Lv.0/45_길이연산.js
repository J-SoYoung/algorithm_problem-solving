// https://school.programmers.co.kr/learn/courses/30/lessons/181879
// 주어진 리스트의 길이가 11 이상이면 원소의 합을 구하고
// 10 이하면 원소의 곱을 구하라.

let num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
// let num_list = [2, 3, 4, 5];

function solution(num_list) {
  var answer = 0;
  num_list.length <= 10
    ? (answer = num_list.reduce((acc, cur) => acc * cur))
    : (answer = num_list.reduce((acc, cur) => acc + cur));
  console.log(answer);
  return answer;
}

solution(num_list);

// 원소의 길이에 따라 조건을 나눈다.
// 배열 안의 원소의 곱하기, 더하기의 누적값을 계산해야 하므로/
// reduce를 사용하여 결과값을 출력한다

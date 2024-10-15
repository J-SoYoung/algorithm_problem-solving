// 나누어 떨어지는 수
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// let arr = [5, 9, 7, 10];
// let divisor = 5;
// let arr = [2, 36, 1, 3];
// let divisor = 1;
let arr = [3, 2, 6];
let divisor = 10;

function solution(arr, divisor) {
  var answer = [];
  const result = arr.filter((a) => a % divisor === 0);
  result.length === 0
    ? answer.push(-1)
    : (answer = result.sort((a, b) => a - b));
  return answer;
}

solution(arr, divisor);

// filter을 돌면서 arr의 각 원소와 divisor을 나눈다
// 나눠서 떨어지는 값이 있으면 push해서 넣는다
// sort해서 오름차순 정렬
// push한 배열이 없으면 -1입력

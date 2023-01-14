// https://school.programmers.co.kr/learn/courses/30/lessons/120841
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중
// 하나를 return 하도록 solution 함수를 완성해주세요.

// let dot = [2, 4];
let dot = [-7, 9];

function solution(dot) {
  var answer = 0;
  // dot[0] > 0 ? console.log(1, 4) : console.log(2, 3);
  dot[0] > 0
    ? dot[1] > 0
      ? (answer = 1)
      : (answer = 4)
    : dot[1] > 0
    ? (answer = 2)
    : (answer = 3);
  console.log(answer);
  return answer;
}

solution(dot);

// 크게 0번째가 음수인지 양수인지 삼항연산자로 판별한 다음
// 다음 1번째의 음수 / 양수의 값을 판별한다.

// 점 위치 구하기 : https://school.programmers.co.kr/learn/courses/30/lessons/120841
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어진다. 
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 함수를 완성해주세요.

// let dot = [-2, 4];

// function solution(dot) {
//   var answer = 0;
//   if ( dot[0] > 0 ){
//     answer = dot[1] > 0 ? 1 : 4
//   } else if( dot[0] < 0){
//     answer = dot[1] > 0 ? 2 : 3
//   }
//   console.log(answer)
//   return answer;
// }

// solution(dot);


// 구조분해 할당으로 문제를 해결할 수 있다.
let dot = [-2, -4];

function solution(dot) {
  var answer = 0;
  const [num1, num2] = dot;
  const check = num1 * num2 > 0
  answer = num1 > 0 ? (check ? 1 : 4) : (check? 3 : 2);
  console.log(answer)
}

solution(dot);
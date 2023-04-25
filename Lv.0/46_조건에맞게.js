// 주어진 수 k가 홀수라면 arr요소에 k를 곱하고, k가 짝수라면 arr요소에 k를 더하라
// https://school.programmers.co.kr/learn/courses/30/lessons/181835

let arr = [1, 2, 3, 100, 99, 98];
let k = 3;

// map이 arr를 반환하므로, map의 콜백함수에 조건을 달아서 결과값을 출력
function solution(arr, k) {
  var answer = [];
  answer = arr.map((num) => {
    return k % 2 === 0 ? num + k : num * k;
  });
  console.log(answer);
  return answer;
}

// if문을 사용하여 조건에 맞게 함수를 생성
// function solution(arr, k) {
//   var answer = [];
//   if (k % 2 === 0) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] += k;
//       answer.push(arr[i]);
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] *= k;
//       answer.push(arr[i]);
//     }
//   }
//   console.log(answer);
//   return answer;
// }

solution(arr, k);

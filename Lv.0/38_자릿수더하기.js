// https://school.programmers.co.kr/learn/courses/30/lessons/120906
// n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
let n = 1234;

// function solution(n) {
//   var answer = "";
//   const str = String(n);
//   const arr = [];

//   for (let i = 0; i < str.length; i++) {
//     arr.push(Number(str[i]));
//     answer = arr.reduce((a, b) => a + b);
//   }
// }

function solution(n) {
  var answer = "";
  const arr = String(n).split("");
  answer = arr.reduce((acc, cur) => acc + Number(cur), 0);
}

solution(n);

// reduce를 활용하여 주어진 값을 누적계산하였다 
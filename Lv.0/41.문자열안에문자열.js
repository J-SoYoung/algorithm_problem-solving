// https://school.programmers.co.kr/learn/courses/30/lessons/120908
// str1문자열에서 str2문자열을 찾는 함수를 작성해주세요

let str1 = "ppprrrogrammers";
let str2 = "pppp";

function solution(str1, str2) {
  var answer = 0;
  str1.includes(str2) ? (answer = 1) : (answer = 2);
  console.log(answer);
  return answer;
}
solution(str1, str2);

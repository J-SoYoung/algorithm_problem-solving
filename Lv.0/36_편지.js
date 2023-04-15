// https://school.programmers.co.kr/learn/courses/30/lessons/120898
// 편지 문구에 따라 편지지의 길이를 구하라

let message = "I love you~";

function solution(message) {
  var answer = 0;
  answer = message.length * 2;
  console.log(answer);
  return answer;
}

solution(message);

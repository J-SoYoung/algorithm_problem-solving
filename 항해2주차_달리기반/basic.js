// 수박수박 : 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

// let n = 3;
let n = 4;

function solution(n) {
  let answer = "";
  let str = "수박";
  answer = str.repeat(Math.floor(n / 2));
  n % 2 === 0 ? answer : (answer += "수");
  return answer;
}
solution(n);

// 짝수면 '수박'문자룰 n/2만큼 더하고
// 홀수면 n/2만큼 더한 문자에 , '수'를 한글자 더 붙일것
// String.repeat() 메서드를 활용해 주어진 횟수만큼 반복해서 문자열을 붙였다

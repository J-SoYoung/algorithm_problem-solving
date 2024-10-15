// 수박수박 : 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

let n = 3;

function solution(n) {
  var answer = "";
  let s = "수박";
  let result = "";
  for (let i = 0; i < Math.floor(n / 2); i++) {
    answer = result += s;
  }
  n % 2 === 0 ? answer : answer + s[0];
  console.log(n % 2 !== 0 ? answer + s[0] : answer);
  return answer;
}
solution(n);
// n/2 몫만큼의 for문을 돌려서 수박을 더하고,
// 짝수면 그대로 return, 홀수면 s의 [0]번째를 더해라
// string을 유사배열로 사용해서 lenght를 씀

// ----------------------------------------------------------------
// let m = 3;
let m = 4;

function solution(m) {
  let answer = "";
  let str = "수박";
  answer = str.repeat(Math.floor(m / 2));
  m % 2 === 0 ? answer : (answer += "수");
  return answer;
}
solution(m);

// 짝수면 '수박'문자룰 n/2만큼 더하고
// 홀수면 n/2만큼 더한 문자에 , '수'를 한글자 더 붙일것
// String.repeat() 메서드를 활용해 주어진 횟수만큼 반복해서 문자열을 붙였다

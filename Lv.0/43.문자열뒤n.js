// https://school.programmers.co.kr/learn/courses/30/lessons/181910
// 주어진 문자열을 뒤에서부터 n만큼 추출하는 함수를 만들어라

let my_string = "ProgrammerS123";
let n = 11;

function solution(my_string, n) {
  var answer = "";
  answer = my_string.slice(-n);
  console.log(answer);
  return answer;
}
solution(my_string, n);

// string메서드의 slice를 활용하였다
// slice로 전달된 인수가 음수일 경우 뒤에서부터 추출하기 때문에
// 주어진 숫자 n에 -를 붙였다

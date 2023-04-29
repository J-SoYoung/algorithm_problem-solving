// 가위는 2 바위는 0 보는 5로 표현합니다. 가위바위보를 이기는 함수를 작성하라
// https://school.programmers.co.kr/learn/courses/30/lessons/120839

let rsp = "20522";

function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i++) {
    String(rsp[i]) === String(2)
      ? (answer += "0")
      : String(rsp[i]) === String(0)
      ? (answer += "5")
      : (answer += "2");
  }
  return answer;
}
solution(rsp);

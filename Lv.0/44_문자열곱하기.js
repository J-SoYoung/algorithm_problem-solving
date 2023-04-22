// https://school.programmers.co.kr/learn/courses/30/lessons/181940
// 주어진 문자열을 k만큼 반복하는 함수를 작성해라

let my_string = "love";
let k = 3;

function solution(my_string, k) {
  var answer = "";
  answer = my_string.repeat(k);
  console.log(answer);
  return answer;
}
solution(my_string, k);

// string의 repeat메서드를 활용하여 문제를 해결하였다

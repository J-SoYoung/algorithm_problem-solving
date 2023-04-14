// 주어진 문자 my_string에서 a,e,i,o,u의 모음을 제거한 문자열을 return하라
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

let my_string = "nice to meet you";
let str = ["a", "e", "i", "o", "u"];

function solution(my_string) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!str.includes(my_string[i])) answer += my_string[i];
  }
  console.log(answer);
  return answer;
}

solution(my_string);

// mystring의 길이만큼 반복문을 만든다/
// mystring의 각 문자열이 str 배열의 문자열에 포함되는지 확인하고
// 새로운 문자열을 만들어야 한다.

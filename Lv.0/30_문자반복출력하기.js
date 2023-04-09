let my_string = "hello";
let n = 3;

// 1번째
// function solution(my_string, n) {
//   var answer = "";
//   const string = my_string.split("").map((m) => m.repeat(n));
//   answer = string.join("");

//   return answer;
// }

// 2번째
function solution(my_string, n) {
  var answer = "";
  for (const str of my_string) {
    answer += str.repeat(n);
  }
  return answer;
}

solution(my_string, n);

// 1번째
// string을 배열로 만들어 map을 활용하였다. 각 인덱스별로 repeat메서드를 적용하여 반복 문자열을 만들었다.
// 2번째
// 문자열의 유사배열 객체 특징을 활용하여 인덱스별로 repeat메서드를 적용시켰다.

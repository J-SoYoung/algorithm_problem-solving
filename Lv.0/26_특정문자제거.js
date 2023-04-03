let my_string = "BCBdbe";
let letter = "B";

// function solution(my_string, letter) {
//   var answer = "";
//   for (let i = 0; i < my_string.length; i++) {
//     if (my_string[i] !== letter) answer += my_string[i];
//   }
//   console.log(answer);
//   return answer;
// }

function solution(my_string, letter) {
  var answer = "";
  answer = my_string.replaceAll(letter, "");
  console.log(answer);
  return answer;
}

solution(my_string, letter);

// replace() 메서드를 사용하여 문자열에서 "f"를 빈 문자열로 대체(replace)하는 방법도 있고,
// 반복문을 사용해서 letter와 맞지 않는 것은 다시 문자열에 할당하는 방법도 있다.

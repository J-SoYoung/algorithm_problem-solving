// https://school.programmers.co.kr/learn/courses/30/lessons/120822
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// let my_string = "jaron";
let my_string = "bread";

function solution(my_string) {
  var answer1 = "";
  answer = my_string.split("").reverse().join("");
  console.log(answer);
  return answer;
}

solution(my_string);

// 뭐든 내가 생각했던 결과가 나오는 법이 없다! 확실하게 console.log로 찍어봐야 알 수 있다.
// reverse()는 "배열의 순서"를 반전하기 때문에 문자열을 배열로 만들어 준 뒤 사용해야 한다. => 배열의 순서를 바꾸는 메소드이기 때문에 문자열을 하나씩 쪼개 배열로 만들고 순서를 바꿨다
// 1. split("")메서드를 활용해 문자열을 배열로 만들어준다.
// 2. reverse() 1번 배열의 순서를 바꾼다
// 3. join("") 메서드는 배열의 문자열을 연결한다.

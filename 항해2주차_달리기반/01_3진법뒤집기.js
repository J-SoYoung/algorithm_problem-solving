// https://school.programmers.co.kr/learn/courses/30/lessons/68935
// 3진법 뒤집기 : n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록

let n = 45; // 7
// let n = 125   // 229

function solution(n) {
  var answer = 0;

  answer = n.toString(3).split("").reverse().join("");
  answer = parseInt(answer, 3);
  return answer;
}
solution(n);

// 3진법으로 변환 .toString(3) 메서드 사용
// split()메서드는 구분자를 이용해 문자열을 나눈뒤 배열로 반환
// 이때 ! 1200을 하나의 배열로 반환하면, reverse는 한 덩이로 보기 때문에
// 1200을 0021 로 뒤집지 못함. -> split()으로 하나씩 쪼개줘야 한다
// reverse()메서드 (배열의 내용을 뒤집음) 대상을 배열로 바꿔줘야 한다.

// 10진법으로 다시 변환 parseInt(바꿀 숫자, 사용된 진법)

// 배열자르기
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록
// https://school.programmers.co.kr/learn/courses/30/lessons/120833

let numbers = [1, 2, 3, 4, 5];
let num1 = 1;
let num2 = 3;

function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  console.log(answer);
  return answer;
}

solution(numbers, num1, num2);

// slice(): 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

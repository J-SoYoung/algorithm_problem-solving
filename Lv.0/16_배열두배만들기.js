// https://school.programmers.co.kr/learn/courses/30/lessons/120809
// numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// let numbers = [1, 2, 3, 4, 5];
let numbers = [1, 2, 100, -99, 1, 2, 3];

function solution(numbers) {
  var answer = [];
  answer = numbers.map((n) => n * 2);
  console.log(answer);
  return answer;
}

solution(numbers);

// 배열로 묶여있는 원소들은 배열 메소드를 활용하여
// 각 요소로 활용할 수 있다.

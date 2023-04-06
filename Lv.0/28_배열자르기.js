let numbers = [1, 3, 5];
let num1 = 1;
let num2 = 2;

function solution(numbers, num1, num2) {
  var answer = [];
  answer = numbers.slice(num1, num2 + 1);
  console.log(answer);
  return answer;
}

solution(numbers, num1, num2);


// https://school.programmers.co.kr/learn/courses/30/lessons/120809
// 원본배열 *2를 만들어라



// let numbers = [1, 2, 3, 4, 5]
let numbers = [1, 2, 100, -99, 1, 2, 3]


function solution(numbers) {
  var answer = [];
  answer = numbers.map((n)=> n*2)
  return answer;
}
solution(numbers)


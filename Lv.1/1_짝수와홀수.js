// https://school.programmers.co.kr/learn/courses/30/lessons/12937

let num = 4
// let num = 4


function solution(num) {
  var answer = '';
  if (num % 2 === 0){
    answer = "Odd"
  }else {
    answer = "Even"
  }
  console.log(answer)
  return answer;
}

solution(num)

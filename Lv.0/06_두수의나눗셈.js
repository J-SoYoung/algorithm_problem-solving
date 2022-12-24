// let num1 = 3
// let num2 = 2
// let num1 = 7
// let num2 = 3
let num1 = 1
let num2 = 16


function solution(num1, num2) {
  var answer = ''
  answer = Math.floor(( num1 / num2 ) * 1000)
  console.log(answer)
  return answer;
}

solution(num1, num2)


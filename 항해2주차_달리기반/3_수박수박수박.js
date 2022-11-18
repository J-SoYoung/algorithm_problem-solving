// https://school.programmers.co.kr/learn/courses/30/lessons/12922

let n = 3
// let n = 4

function solution(n) {
  var answer = '';
  let s = '수박'
  let result = '' 
  // console.log(Math.floor(n/2))

  for (let i=0; i<(Math.floor(n/2)); i++){
    // console.log(a += s)
    answer = result += s
  }
  n % 2 === 0 ? answer : answer+s[0]
  // console.log(n % 2 === 0 ? answer : answer+s[0])
  console.log(n % 2 !== 0 ? answer+s[0] : answer)
  // console.log(answer)
  return answer;
}

solution(n)

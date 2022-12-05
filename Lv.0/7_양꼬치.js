// let n = 10
// let k = 3
let n = 64
let k = 6
// let num = 4


function solution(n, k) {
  var answer = ((12000 * n) + (2000 * k) - (2000 * Math.floor(n/10)))
  return answer;
}

solution(n, k)


// (12000원 * 10인분) + (2000원 * 3개) - (2000원 * 1) 
// 서비스 음료수를 계산 : n을 10으로 나눠서 정수 몫만 취한다 => 소수점은 버리기


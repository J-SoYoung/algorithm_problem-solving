// https://school.programmers.co.kr/learn/courses/30/lessons/120816
// 프로그래머스 Lv_0 피자 나눠먹기


// let slice = 7
// let n = 10
let slice = 4
let n = 12


function solution(slice, n) {
  var answer = 0;
  console.log(Math.ceil(n/slice))
  return answer;
}


solution(slice, n)


// think
// 사람수 나누기 피자조각 => 딱 떨어지지 안흐면 올림

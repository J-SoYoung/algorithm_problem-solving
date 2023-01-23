// 프로그래머스 Lv.0 머쓱이보다 키 큰 사람
// https://school.programmers.co.kr/learn/courses/30/lessons/120585

// 문제요약
// 머쓱이 height보다 키가 큰 친구들을 array에서 찾아서 몇 명인지 출력해라

let array = [149, 180, 192, 170]
let height = 167

function solution(array, height) {
  var answer = 0;
  answer = array.filter((ele)=>ele > height)
  return answer.length;
}

solution(array, height)

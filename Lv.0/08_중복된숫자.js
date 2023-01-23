// 프로그래머스 Lv.0 중복된 숫자 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120583

// let array	 = [1, 1, 2, 3, 4, 5]
// let n = 1
let array	 = [0, 2, 3, 4]
let n = 1

function solution(array, n) {
  var answer = 0;
  array.forEach((ele) => {
    if( ele === n ) {answer += 1} 
  });
  return answer;
}

solution(array, n)

// answer는 전역변수다. forEach문 안에서 answer를 불러와 연산을 했고
// 연산한 결과값은 forEach문 밖에서 출력해봤다.
// 무조건 answer아래에 콘솔을 찍어보던 습관에서 
// 블록스코프를 인지하고 블록 밖에서 결과를 출력했다. 
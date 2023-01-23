// https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 프로그래머스 Lv-0 아이스아메, 정수로 떨어졌을 때 말고도 이외의 값을 생각하자

let money = 15000

function solution(money) {
  var answer = [];
  answer = [Math.floor( money / 5500 )]
  const result = (money-(5500*(answer)))
  answer.push(result)
  
  return answer;
}

solution(money)


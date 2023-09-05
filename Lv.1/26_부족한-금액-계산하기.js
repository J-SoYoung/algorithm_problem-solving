// 부족한 금액 계산하기
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 
// 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 
// (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

let price = 3;
let money = 20;
let count = 4;

function solution(price, money, count) {
  var answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  answer>money? answer = answer - money : answer= 0  
  console.log(answer);
  return answer;
}

solution(price, money, count);

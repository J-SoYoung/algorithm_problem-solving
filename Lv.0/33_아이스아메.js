// https://school.programmers.co.kr/learn/courses/30/lessons/120819
//  아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
let money = 15000;

function solution(money) {
  const COFFEE_PAY = 5500;
  var answer = [];
  let coffee;
  let penny;

  coffee = Math.floor(money / COFFEE_PAY);
  penny = money - COFFEE_PAY * coffee;
  answer.push(coffee, penny);

  return answer;
}

solution(money);

// 가지고 있는 돈으로 커피를 몇 잔 살 수 있는지 계산 => 돈 / 커피
// 매개변수 돈 - (커피값 * 위에서 구한 몫) = 잔돈나옴
// 두 결과값을 변수에 넣고 result 배열에 추가하기.

// 결과값을 바로 answer변수에 push하기
function solution(money) {
  const COFFEE_PAY = 5500;
  var answer = [];
  answer.push(Math.floor(money / COFFEE_PAY));
  answer.push(money % COFFEE_PAY);

  return answer;
}

solution(money);

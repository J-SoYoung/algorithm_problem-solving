//https://school.programmers.co.kr/learn/courses/30/lessons/120818

let price = 128500;

var answer = 0;
function discount(money, sale) {
  answer = money - money * sale;
  console.log(answer);
  return answer;
}

function solution(price) {
  if (price >= 500000) {
    discount(price, 0.2);
  } else if (price >= 300000) {
    discount(price, 0.1);
  } else if (price >= 100000) {
    discount(price, 0.05);
  }
}

solution(price);

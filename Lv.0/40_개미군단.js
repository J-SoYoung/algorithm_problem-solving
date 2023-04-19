// https://school.programmers.co.kr/learn/courses/30/lessons/120837
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 예를 들어 체력 23의 여치를 사냥하려고 할 때,
// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하는 함수를 완성하라.

let hp = 26;

function solution(hp) {
  var answer = 0;
  const QUEEN = 5;
  const SOLIDER = 3;

  answer += Math.floor(hp / QUEEN);
  const division = hp % QUEEN;

  if (division === 1 || division === 2) {
    answer += division;
  } else if (division >= 3) {
    answer += Math.floor(division / SOLIDER);
    answer += division % SOLIDER;
  }
  console.log(answer);

  return answer;
}
solution(hp);

// 나눗셈의 몫과 나머지를 활용하여 문제를 해결할 수 있을 것 같은데

// 큰 수부터 나눗셈을 하고, 몫을 누적한다. 
// 나머지의 숫자가 1,2인 경우 몫을 누적하고 
// 3이상인 경우 병정개미로 한번 더 나눗셈을 한다

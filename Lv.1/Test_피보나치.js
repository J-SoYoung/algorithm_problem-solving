// 문제2. 피보나치 수열에서 4 백만 이하이면서 짝수인 항의 합을 구하라
// 피보나치 수열을 생성한다. -> 짝수인 것만 먼저 더하라 ** 기본값인 2도 더해야함

const lastNumber = 4000000;
// const lastNumber = 50;

function solution(lastNumber) {
  let prev = 1;
  let current = 2;
  let fibonacciSum = 0;
  let evenSum = 0;

  while (current <= lastNumber) {
    if (current % 2 == 0) {
      evenSum += current;
    }
    fibonacciSum = prev + current;
    prev = current;
    current = fibonacciSum;
  }
  return evenSum;
}

solution(lastNumber);

function generateFibonacciSum(limit) {
  let prev = 1;
  let current = 2;
  let sum = 0;

  while (current <= limit) {
    if (current % 2 === 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

const limit = 4000000;
const result = generateFibonacciSum(limit);
console.log(`4,000,000 이하의 짝수 피보나치 수열 합: ${result}`);

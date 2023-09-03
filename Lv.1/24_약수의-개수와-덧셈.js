let left = 13;
let right = 17;
let result = 43;

// 약수의 개수를 구하는 함수를 생성
function countNumber(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

// 약수의 개수에 따른 +/- 부호화
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    const divisorCount = countNumber(i);
    if (divisorCount % 2 === 0) {
      answer += i;
    } else answer -= i;
  }
  console.log(answer);
  return answer;
}

solution(left, right);

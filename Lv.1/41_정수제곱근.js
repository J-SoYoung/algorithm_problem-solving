let n = 3;

function solution(n) {
  var answer = 0;
  let num = 0;
  num = Math.sqrt(n);
  Number.isInteger(num) ? (answer = Math.pow(num + 1, 2)) : (answer = -1);
  return answer;
}

solution(n);

// Number.isInteger(num) 정수인지 판별해보기 위함
// Math.pow(num + 1, 2) 제곱 계산을 하는 메서드
// Math.sqrt(n) 제곱근을 구하는 메서드

// 문제 : 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return하는 solution함수 생성
//  a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

let a = [-1, 0, 1];
let b = [1, 0, -1];
// let a = [1, 2, 3, 4];
// let b = [-3, -1, 0, 2];

function solution(a, b) {
  var answer = 0;

  answer = a.reduce((acc, currentValue, index) => {
    return acc + currentValue * b[index];
  }, 0);
  
  // for (let i = 0; i < a.length; i++) {
  //   answer += a[i] * b[i];
  // }
  
  console.log(answer);
  return answer;
}

solution(a, b);


// reduce를 활용해 누적계산을 사용할 수 있고 
// for문을 사용해 배열에서 모든 값을 계산하는 방법도 있다
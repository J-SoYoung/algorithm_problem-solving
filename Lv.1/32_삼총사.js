// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 주어진 배열에서 3개의 요소를 더해 0이 되는 방법의 수를 구하라

// let number = [-2, 3, 0, 2, -5];
// let number = [-3, -2, -1, 0, 1, 2, 3];
let number = [-1, 1, -1, 1];

function solution(number) {
  var answer = 0;
  for(let i=0; i<number.length; i++){
    // console.log('첫번째for-',number[i])
    for(let j=i+1; j<number.length; j++){
      // console.log(' 2for-',number[j])
      for(let k=j+1; k<number.length; k++){
        // console.log('  3for-',number[k])
        const sum = number[i]+ number[j] + number[k]
        if( sum === 0) answer += 1        
      }
    }
  }
  console.log(answer)
  return answer;
}

solution(number);

// 주어진 배열에서 중첩 반복문을 사용하여 각 인덱스마다 연결할 수 있는 세 숫자를 구할 수 있었다.
// 이를 통해 중첩 반복문이 어떻게 동작하는지 확실하게 알 수 있는 문제였다. 
// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 두 수의 최대공약수와 최소공배수를 반환하는 함수 만들기

let n = 2;
let m = 5;
// let n = 3;
// let m = 12;

function solution(n, m) {
  var answer = [];
  let commonMin = 0
  let commonMax = 0

  // 최대공약수
  for (let i=0; i < (n > m ? n : m ); i++){
    if ( Number.isInteger(n/i) && Number.isInteger(m/i) ){
      let arr =[]
      arr.push(i)
      commonMax = Math.max(...arr)
    }
  }
  // 최소공배수
  commonMin = ( n * m ) / commonMax 
  answer.push(commonMax, commonMin)

  return answer;
}
solution(n,m);

// 최대공약수
// 1부터 n,m 중에 큰 수까지 반복문을 돌면서 n과 m모두 나눠지는 수를 찾아라
// 나눠지는 수 = 나눴을 때 정수가 되는 i를 찾고, 그 중에 제일 큰 수를 반환하라 

// 최소공배수 
// n * m을 최대공약수로 나눈 수 


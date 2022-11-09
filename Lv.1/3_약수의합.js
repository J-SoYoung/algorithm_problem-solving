// https://school.programmers.co.kr/learn/courses/30/lessons/12928

let n = 12


function solution(n) {
  var answer = 0;

  for (let i=0; i<=n; i++){
    if (n % i === 0){
      answer += Number(i)
      console.log(answer)
    }
  }

  // return answer;
}

solution(n)


// 약수는 어떻게 구하지? 문제에 대한 기본적인 지식도 필요하다.
// 자연수를 어떤 수로 나누었을 때 나누어 떨어진다면, 그 수는 약수입니다. 

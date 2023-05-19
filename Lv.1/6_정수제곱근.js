let n = 3



function solution(n) {
  var answer = 0;
  let num = Math.sqrt(n)
  let int = Number.isInteger(num)
  // console.log(num)
  // console.log(Number.isInteger(num))
  if (int && int > 0){
    console.log(Math.pow(num+1, 2))
  }else {
    console.log(-1)
  }
  return answer;
}

solution(n)

// n의 제곱근?을 구하고, 다시 제곱근+1의 제곱을 구하라.
// 제곱근 : 제곱해서 그 수가 되는 수 

// 예외처리 : 3의 제곱근을 구했을 때, 1.73205나옴
// 이때 제곱근이 양의정수가 아니면 -1 반환, 
// 양의정수는 어떻게 표현할까. 소수가 나오면 -1해야되는데. 
// 소수는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수다.

// deepdive로 메소드 찾음. 수학적인 생각은 조금 미뤄둠.
// Number.isInteger => 인수로 전달된 숫자값이 정수인지 검사 TF출력
// Math.pow => 제곱하기 , Math.sqrt(n) 제곱근구하기
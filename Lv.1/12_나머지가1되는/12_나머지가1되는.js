let n = 12
// let num = 4

// 1_풀이 내생각
function solution(n) {
  var answer = 0;
  let arr = []

  for (let i = 0; i < n; i++){
    if (n % i === 1) arr.push(i) 
  }
  // for문의 결과값을 굳이 arr에 넣지 않아도 
  // 제일 처음 true가 나온 i가 최소숫자이므로
  // return i로 끝날 수 있다. 
  return answer = Math.min(...arr)
}
solution(n)


// 2_코드 줄이기. 불필요한 코드는 생략
function solution(n) {
  var answer = 0;

  for (let i = 0; i < n; i++){
    if (n % i === 1) return answer = i
  }
}
solution(n)


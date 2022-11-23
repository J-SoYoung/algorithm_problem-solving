// let a = 3
// let b = 5
let a = 5
let b = 3
// let a = 3
// let b = 3



function solution(a, b) {
  var answer = 0;
  let num
  // if (a > b){ num = a, a = b , b = num; }
  // 배열 기반의 다중할당
  if (a > b) [a , b] = [b , a]
  console.log(a,b)

  // console.log(a,b)

  for (let i = a; i <= b; i++){
    answer += +[i]
    // console.log(answer)
  }
  return answer;
}

solution(a, b)


// https://school.programmers.co.kr/learn/courses/30/lessons/12944


// let arr = [5,5]
let arr = [1,2,3,4]

// reduce 사용
// function solution(arr) {
//   var answer = 0;
//   const sum = arr.reduce((a,b)=>a+b)
//   console.log(sum)
//   answer = sum/arr.length
//   console.log(answer)
//   return answer;
// }

// solution(arr)


// for문
function solution(arr) {
  var answer = 0;
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum += arr[i]
    answer = sum/ arr.length
    console.log(answer)
  }
  return answer;
}

solution(arr)


// 내가 생각하는 연산과 for문에서 연산을 처리하는 부분이 차이가 있음을 알게됨. 

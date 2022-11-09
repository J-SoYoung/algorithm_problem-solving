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

// 내가 생각하는 연산과 for문에서 연산을 처리하는 부분이 차이가 있음을 알게됨. 배열의 첫번째 요소를 가지고 for문 안의 연산을 모두 마치고 결과를 출력하고 두번째 요소의 계산으로 넘어간다. 내 머리는 모든 배열요소가 for문 안에 한꺼번에 들어가서 연산되기 때문에 약간 헷갈리는 부분이 있었따. 
// 위 코드대로라면 1 -> 0.25의 결과값을 내고 2로 넘어감. ㅇㅋ이해함.

// let answers = [1,2,3,4,5]	
let answers = [1,3,2,4,2]	

// 수포자들의 규칙의 수를 배열로 저장
let A = [1,2,3,4,5]
let B = [2,1,2,3,2,4,2,5]
let C = [3,3,1,1,2,2,4,4,5,5]

// ? 
// console.log(0%5)//0
// console.log(1%5)//1
// console.log(2%5)//2
// console.log(3%5)//3
// console.log(4%5)//4

  // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
function solution(answers) {
  var answer = [];
  let sA = answers.filter((item,idx)=> {return item === A[idx % 5]}).length
  let sB = answers.filter((item,idx)=> {return item === B[idx % 8]}).length
  let sC = answers.filter((item,idx)=> {return item === C[idx % 10]}).length

  let max = Math.max(sA, sB, sC)
  console.log(max)

  // 마지막이 왜 1,2,3인지모르겠!@
  if(sA === max) answer.push(1);
  if(sB === max) answer.push(2);
  if(sC === max) answer.push(3);
  console.log(answer)
  return answer;
}

solution(answers)

// 정말 하나씩 비교해가면서 푸는거야??
// 3개를 따로 비교해가면서 하는거야?? 아닐거야...
// 아니야! 니가 한 생각이 맞아. 일단 맞다고 생각하고 풀어봐
// 문제를 풀다가 필요한 식이나 변수가 필요하면 직접 만들어라.
// 제한은없다. 

// 
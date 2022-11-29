let numbers = [1,2,3,4,6,7,8,0]	
// let numbers = [5,8,4,0,6,7,9]	
let arr = [0,1,2,3,4,5,6,7,8,9]

function solution(numbers) {
  var answer = '';
  // 일단 해결은했으나. 여튼 다시 풀어보가 
  // console.log(numbers.reduce((acc, cur)=>{ return acc + cur }))
  answer = 45 - numbers.reduce((acc, cur)=>{ return acc + cur })
  console.log(answer)
}

solution(numbers)




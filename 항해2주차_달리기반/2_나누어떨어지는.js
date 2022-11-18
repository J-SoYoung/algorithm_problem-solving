
// let arr = [10, 9, 7, 5]
// let divisor = 5

// let arr = [2, 36, 1, 3]
// let divisor =	1

let arr = [3,2,6]
let divisor = 10

function solution(arr, divisor) {
  var answer = [];

  let result = arr.filter((item)=>{
    // console.log(item % divisor === 0)
    return item % divisor === 0
  })
  // result == "" ? console.log(-1) : console.log(result.sort((a,b)=>a-b))
  result == "" ? answer.push(-1) : answer = result.sort((a,b)=>a-b)

  // result.sort((a,b)=>a-b)
  console.log(answer)
  return answer 
}



solution(arr, divisor)

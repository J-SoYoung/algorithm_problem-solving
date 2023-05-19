// let arr = [15, 9, 7, 10]	
// let divisor = 5
// let arr = [2, 36, 1, 3]		
// let divisor = 1
let arr = [3,2,6]
let divisor = 10

// 1. arr원소를 div로 나눠서 떨어지는가
// 2. 떨어지면 오름차순으로 정렬하라
// 3. 떨어지지 않으면 -1을 반환하라 

function solution(arr, divisor) {
  var answer = [];
    answer = arr.filter((item, idx)=> {
      // console.log(item)
      // console.log(item % divisor === 0)
      return item % divisor === 0 
    })

    let result = answer.length === 0 ? answer.concat(-1) : answer.sort((a,b)=> a-b)
    console.log(result)
    return result
}

solution(arr, divisor)




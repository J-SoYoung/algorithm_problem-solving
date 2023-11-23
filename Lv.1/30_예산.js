
let d = [1,3,2,5,4]
let budget = 9
let result = 3

// let d = [2,2,3,3]	
// let result = 4

function solution(d, budget) {
  var answer = 0;
  const budgetApply = d.sort((a,b)=>a-b).filter(ele=>{
    if( budget - ele >= 0 ){
      budget -= ele
      console.log(budget -= ele)
      return true
    }
    return false
  })
  console.log(budgetApply)
  return budgetApply.length;
}

solution(d, budget);

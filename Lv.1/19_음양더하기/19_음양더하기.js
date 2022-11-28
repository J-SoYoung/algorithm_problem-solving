// let absolutes = [4,7,12]	
// let signs = [true,false,true]	
let absolutes = [1,2,3]
let signs = [false,false,true]



function solution(absolutes, signs) {
  var answer = 0;
  // console.log((4*1)+(7*(-1))+(12*1))
  signs.map((s,idx)=> {
    // console.log(s ? absolutes[idx] :  absolutes[idx] * -1)
    return answer +=  s ? absolutes[idx] :  absolutes[idx] * -1 
  })
  console.log(answer)
  return answer;
}

solution(absolutes, signs)


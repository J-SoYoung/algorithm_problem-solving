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


// ## 계획
// - sign의 T/F에 따라서 1과 -1을 곱한 수를 더한다<br>
// ```(4*1)+(7*(-1))+(12*1)```<br>
// - signs와 absolutes의 배열의 길이는 같으므로 idx를 공유할 수 있다. <br>
// - map을 돌려서 signs의 요소를 하나씩 출력해서<br> 
//   signs가 T면 absolutes를 출력하고, F면 (* -1)을 해준다.<br>  
// - 결과값이 맞으면 answer변수에 값을 더해서 넣는다<br>
// <br>

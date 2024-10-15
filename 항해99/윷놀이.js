

function solution(arr1){
	let answer= "";

  s = arr1.filter((item)=>{
    return (+item === 0) 
  })

  if (s.length === 0) return answer ='모'
  else if ( s.length === 1) return answer = "도"
  else if ( s.length === 2) return answer = "개"
  else if ( s.length === 3) return answer = "걸"
  else if ( s.length === 4) return answer = "윷"

  console.log(answer)
	return answer;
}

// let arr1=[0,1,0,0];
let arr1=[1,1,1,0];
// let arr1=[0,0,1,1];
console.log(solution(arr1))



// 0 (배) / 1(등)
// 모(배 0개, 등 4개),
// 도(배 1개, 등 3개), 
// 개(배 2개, 등 2개), 
// 걸(배 3개, 등 1개), 
// 윷(배 4개, 등 0개), 


let n = 45 
// let n = 125   // 229


function solution(n) {
  var answer = 0;
  
  answer = n.toString(3).split("").reverse().join("")
  answer = parseInt(answer, 3)
  
  // 진수를 변환하는 메소드 

  console.log( answer )
  return answer

}
solution(n)

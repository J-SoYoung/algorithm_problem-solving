let n = 118372	

function solution(n) {
  var answer = 0;
  // let arr = []
  let arr = new Array()
  let s = n+'';
  for (let i=0; i<(s.length); i++){
    arr.push(+s[i])
  }  
  arr.sort((a,b)=>b-a)
  answer = Number(arr.join(''))
  console.log(answer)
  return answer;
}
    
solution(n)


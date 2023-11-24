// 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

let t = "3141592"	
let p = "271"

function solution(t,p) {
  var answer = 0;
  for(let i=0; i<=t.length-p.length; i++){
    const string = t.slice(i,i+(p.length))
    if ( +string <= +p ) answer += 1 
  }
  console.log('answer-',answer)
  return answer;
}

solution(t,p);


// t에서 부분문자열 구하기
// 반복문을 통해서 t를 i번부터 slice하여 원하는 문자열을 취한다.
// 구한 문자열과 p를 비교해야 한다. 
// 이때, 문자를 숫자로 형변환 후 p보다 작은 숫자를 check한다.

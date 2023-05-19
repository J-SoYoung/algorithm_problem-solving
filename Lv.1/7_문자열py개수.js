let s = "Pyy"
let p = '';
let y = '';

function solution(s) {
  var answer = true;
  for (let i=0; i<s.length; i++){
    if(s[i] === 'P' || s[i] === 'p'){
      p += s[i]
      // console.log(p)
    }
    if(s[i] === 'Y' || s[i] === 'y'){
      y += s[i]
      // console.log(y)
    }
  }

  if(p.length===0 && y.length===0 ){
    answer = true
    // console.log(answer)
  }else{
    answer = p.length === y.length ? true : false
    // console.log(answer)
  }
  return answer;
}

solution(s)

// 주어진 값에서. p의 개수와 y의 개수를 찾아. 비교
// s를 쪼개서 for문을 돌려서 py개수
// s를 map으로 돌려서 py개수
// s를 filter로 py아닌거. 

// 대소문자 구분을 하는지 확인
// (s.toUpperCase())출력은 대문자로 바뀌지만 비교할 때는 원본상태와 비교함. 

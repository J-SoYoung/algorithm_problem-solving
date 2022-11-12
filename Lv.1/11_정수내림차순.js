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


// 배열 메소드의 종류에 대해 더 공부하면 좋겠다
// Q. let arr = [] 초기값을 넣어주는 것과
// let arr = new Array() 로 배열을 만드는 것의 차이점은? 
// 정리 : https://www.notion.so/newArray-f97076971ce247bfb214b976386c744f

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

// 알고리즘 배열 문제를 풀면서 궁금증이 들었다. 
// 배열을 초기화 하는 방법으로는 [ ]같이 대괄호를 표시해 만드는 방법과 new Array()같이 생성자 함수를 이용해 만드는 방법이 있다. 배열의 초기화를 한다는 점은 같은데 왜 굳이 2가지 방법이 있는걸까? 이와 관련한 내용들을 몇몇 찾을 수 있었다. 내가 이해한 내용을 간략히 적어보도록 하겠다.<br>
// <br>
//  정리 : https://www.notion.so/newArray-f97076971ce247bfb214b976386c744f<br>
// <br>
// Q. let arr = [] 초기값을 넣어주는 것과,<br>
// let arr = new Array() 로 배열을 만드는 것의 차이점은?<br>

// **Array생성자 함수는 전달된 인수의 개수에 따라 다르게 동작한다는 것이다** 
// <br>
// 값이 `Number`인지 아닌지에 따라서<br> 
// `new Array()`를 이용하여 배열을 초기와했을때와,<br> 
// `[]`를 이용하여 배열을 초기화했을때의 차이가 명백해진다.<br> 
// `Number`가 아닐 경우에는 배열의 첫 번째 요소로 할당이 된다. <br>
// 하지만 **값이 `Number`일 경우에는 인자로 넘겨진 값과 같은 크기의 빈 배열이 생성된다.**
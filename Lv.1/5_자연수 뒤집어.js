// https://school.programmers.co.kr/learn/courses/30/lessons/12932

let n = 12345

function solution(n) {
  var answer = [];
  let s = (n+'').split('').reverse()
  for (let i=0; i<s.length; i++){
    let n = Number(s[i])
    answer.push(n)
    console.log(answer)
  }
  return answer;
}

solution(n)


// split사용 -> 문자열 쪼개 배열 반환, 배열뒤집기 --> 문자열이네..숫자로 바꿔야 하는데
// for문 돌려서 하나씩 number로 바꿔서... 다시 배열에넣는다. 
// 결과는 출력됐는데 돌아간느낌이다. 하지만 잘했다!!!!!


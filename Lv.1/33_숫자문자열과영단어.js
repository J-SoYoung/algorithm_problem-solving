// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 주어진 문자열을 숫자로 바꿔라.

const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let s = "one4seveneight";
// let s = "23four5six7";
// let s = "2three45sixseven";
// let s = "123";


function solution(s) {
  var answer = 0
  eng.forEach((i,idx)=>{ 
    s = s.replaceAll(i,idx)
    answer = Number(s)
  })
  console.log(answer)
  return answer;
}

solution(s);

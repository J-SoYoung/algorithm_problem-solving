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


//  split사용 -> 문자열 쪼개 배열 반환, 배열뒤집기 --> 문자열이네.. 숫자로 어케바꾸지. for문 돌려서 하나씩 number로 바꿔서...ㅇㅅㅇ 다시 배열에너어. ㅋㅋㅋ뭔가 잘했는데 돌아간느낌이다. 잘했다! 와~!~


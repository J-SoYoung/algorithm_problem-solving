// https://school.programmers.co.kr/learn/courses/30/lessons/12931

let n = 123


function solution(n)
{
  var answer = 0;
  let s = (n+'').split('')
  for (let i=0; i<s.length; i++){
    answer += Number(s[i])
  }
  return answer;
}

solution(n)



// 요거로 채택! 
// n을 문자열로 만들어서 쪼개고 split쓰니까 배열로 만들어짐 
// ( 바로 reduce써서 더하려고 했는데 문자열로 더해짐.) for으로 하나씩 출력해 숫자로 만들고 더함

// 배열로만든다. reduce로 더한다. 

// 배열로 만들어서 do while문 사용해서 더해본다
// https://im-designloper.tistory.com/58 안해봄ㅋㅋ

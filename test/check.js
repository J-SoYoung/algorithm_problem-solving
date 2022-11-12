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
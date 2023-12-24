// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 주어진 문자를 n만큼 이동시켜 문자를 반환하는 함수를 만들어라

// let s = "AB"
// let s = "z"
// let n = 1
let s = "a B z"
let n = 4


function solution(s, n) {
  var answer = '';
  for (let i = 0; i < s.length; i++ ){  
    const ASCII_Num = s.charCodeAt(i)
    if( s[i] == ' ' ) { 
      answer += ' '
    } else if( ASCII_Num >= 97 && ASCII_Num <= 122 ){
      ASCII_Num + n > 122 ? answer += String.fromCharCode(97+(n-1)) : answer +=String.fromCharCode(ASCII_Num+n)
    }else if (ASCII_Num >= 65 && ASCII_Num <= 90 ){
      ASCII_Num + n > 90 ? answer += String.fromCharCode(65+(n-1)) : answer +=String.fromCharCode(ASCII_Num+n)
    }
  }
  console.log(answer)
  return answer
  // return answer;
}

solution(s,n);

// s의 요소들을 유니코드 숫자로 바꾸고 + n만큼 간다. 
// 유니코드 숫자를 다신 문자열로 바꾼다. 
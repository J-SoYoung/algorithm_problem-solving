/** 올바른 괄호 - 스택/큐 

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
  문자열 s의 길이 : 100,000 이하의 자연수
  문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
 */

function solution(s) {
  const stack = [];
  for (const bracket of s) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));


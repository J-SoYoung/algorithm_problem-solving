/////////////////////
// 괄호 유효성 검사, Bracket validation 
/////////////////////
/*
 * 주어진 문자열이 올바른 괄호 문자열인지 확인하는 프로그램을 작성하세요.
 * 올바른 괄호 문자열은 모든 열린 괄호가 올바른 순서로 닫혀야 합니다.
 * 문자열이 올바른 괄호 문자열이라면 true를, 그렇지 않으면 false를 반환합니다.
 */

////////////////////
// 해결과정 플로우 , if 조건문으로 풀이
////////////////////
/*
 * 스택에 열린괄호를 넣는다.
 * 열린괄호가 아니고 닫힌 괄호일 경우에 조건을 분기한다.
 * 스택에 제일 위쪽에 있는 열린 괄호와 현재의 닫힌 괄호가 모양이 맞는 맞는 경우에만 스택에서 pop한다
 * 스택의 괄호 모양과 현재 닫힌 괄호의 모양이 맞지 않으면 false를 출력한다.
 * 모든 괄호가 상쇄되어서 스택에 길이가 0이 된 경우 true를 반환한다
 */

////////////////////
// 객체 매핑을 사용한 풀이 
////////////////////
/*
 * matchingBrackets은 괄호의 짝을 만들어두고 해당 닫힌괄호가 조건을 확인할 때
 * 닫힌괄호에 매핑된 열린괄호와 스택의 마지막에 있는 열린괄호가 맞으면 
 * 스택의 열린괄호를 pop하는 방법도 있다!!! 
 */ 
function solution(str) {
  const stack = [];
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const s of str) {
    if (s === "(" || s === "{" || s === "[") {
      stack.push(s);
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingBrackets[s]
      ) {
        return false;
      }
      stack.pop();
    }
  }
  // for (const s of str) {
  //   if (s === "(" || s === "{" || s === "[") {
  //     stack.push(s);
  //   } else if (stack[stack.length - 1] === "(") {
  //     if (s === ")") {
  //       const bracket = stack.pop();
  //       console.log(bracket);
  //     } else {
  //       return false;
  //     }
  //   } else if (stack[stack.length - 1] === "{") {
  //     if (s === "}") {
  //       const bracket = stack.pop();
  //       console.log(bracket);
  //     } else {
  //       return false;
  //     }
  //   } else if (stack[stack.length - 1] === "[") {
  //     if (s === "]") {
  //       const bracket = stack.pop();
  //       console.log(bracket);
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  return stack.length === 0;
}

console.log(solution("()[]{}")); // result = true
console.log(solution("([)]")); // result = false
console.log(solution("{[()]}")); // result = true

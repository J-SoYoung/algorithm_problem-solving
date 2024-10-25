// let s = "(())()";
let s = "(())()(";

// 문자열을 앞에서부터 보며 열린괄호가 나오면 stack에 푸시
// 닫힌 괄호가 나오면 pop연산을 통해 문자열에서 열린/닫힌 괄호 한쌍을 상쇄
// 위를 반복해 스택에 열린 괄호가 남아있으면 false, 없으면 true반환

function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
      console.log(stack);
    } else if (c === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        console.log("괄호찾음", stack);
        stack.pop();
      }
    }
  }
  console.log("남는것", stack);
  return stack.length === 0;
}

console.log(solution(s));

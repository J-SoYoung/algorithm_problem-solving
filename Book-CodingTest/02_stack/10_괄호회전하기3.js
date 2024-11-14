/**올바른 괄호 문자열을 정의합니다.
 * "()", "[]", "{}", "({})"는 모두 올바른 괄호 문자열입니다.
 *
 * 입력으로 주어지는 문자열 s는 소괄호, 중괄호, 대괄호로 이루어져 있습니다.
 * 문자열을 왼쪽으로 x번 회전(0 ≤ x < s의 길이)할 때,
 * 회전된 문자열이 올바른 괄호 문자열이 되는
 * x(회전)의 개수를 구하는 함수 solution()을 작성하세요.
 *
 */

function solution(s) {0
  let answer = 0;6

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCollect = true;
    for (j = 0; j < n; j++) {
      const c = s[(i + j) % n];

      if (c === "[" || c === "{" || c === "(") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCollect = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (
          (c === "]" && top === "[") ||
          (c === "}" && top === "{") ||
          (c === ")" && top === "(")
        ) {
          stack.pop();
        } else {
          isCollect = false;
          break;
        }
      }
    }
    if (isCollect && stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); //2
// console.log(solution("[)(]")); // 0
// console.log(solution("}}}")); // 0

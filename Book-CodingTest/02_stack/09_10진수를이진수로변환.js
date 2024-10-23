let demical = 13;

function solution(demical) {
  const stack = [];

  while (demical > 0) {
    const reminder = demical % 2;
    stack.push(reminder);
    demical = Math.floor(demical / 2);
  }
  // return stack.join("");

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }
  return binary;
}
console.log(solution(demical));
// solution(demical);

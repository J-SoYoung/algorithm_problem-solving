function solution(n) {
  let stack = [];
  for (let i = 0; i < n.length; i++) {
    stack.push(n[i]);
    if (n[i] === n[i + 1]) {
      stack.pop();
    }
  }
  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //	[4,3]

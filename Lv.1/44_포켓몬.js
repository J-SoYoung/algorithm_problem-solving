function solution(nums) {
  let answer = 0;
  let poketmon = new Set(nums);
  let max = nums.length / 2;

  poketmon.size >= max ? (answer = max) : (answer = poketmon.size);
  return answer;
}

console.log(solution([3, 1, 2, 3])); // result 2
console.log(solution([3, 3, 3, 2, 2, 4])); // result 3
console.log(solution([3, 3, 3, 2, 2, 2])); // result 2

/**
 * n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 
 * 이 중에서 합이 target인 두 수가 arr에 있는지 찾고 
 * 있으면 true 없으면 false를 반환하는 solution함수를 작성하라

- n은 2이상 10,000이하의 자연수
- target은 1 이상 20,000이하의 자연수
- arr의 원소는 1 이상 10,000이하의 자연수
- arr의 원소의 중복은 없다
*/

let arr = [1, 2, 3, 4, 8];
let target = 6; // true

// let arr = [2, 3, 5, 9];
// let target = 10 // false

function counterSort(arr, target) {
  const hashtable = new Array(target + 1).fill(0);
  for (const num of arr) {
    if (num <= target) {
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = counterSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      console.log(complement);
      return true;
    }
  }
  return false;
}
console.log(solution(arr, target));

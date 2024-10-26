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

function solution(arr, target) {
  let hashTable = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    console.log(`현재 숫자: ${arr[i]}, 필요한 값: ${complement}`);
    console.log(hashTable);

    if (hashTable.has(complement)) {
      return true;
    }
    hashTable.set(arr[i], true);
  }
  return false;
}

console.log(solution(arr, target));

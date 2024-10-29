/** 문제 /////////////////////// 
 * n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 
 * 이 중에서 합이 target인 두 수가 arr에 있는지 찾고 
 * 있으면 true 없으면 false를 반환하는 solution함수를 작성하라

- n은 2이상 10,000이하의 자연수
- target은 1 이상 20,000이하의 자연수
- arr의 원소는 1 이상 10,000이하의 자연수
- arr의 원소의 중복은 없다/
*/

// JavaScript의 new Map() 자료구조 사용
function solution(arr, target) {
  let hashTable = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    // console.log(`현재 숫자: ${arr[i]}, 필요한 값: ${complement}`);
    console.log(hashTable);

    if (hashTable.has(complement)) {
      return true;
    }
    hashTable.set(arr[i], true);
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([1, 2, 3, 4, 8], 10));

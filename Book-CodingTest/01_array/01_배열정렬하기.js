// 제약조건
// 정수 배열의 길이는 2이상 10^5 이하입니다
// 정수 배열의 각 데이터 값은 -100,000이상 100,000이하 입니다

// let num = [1, -5, 2, 4, 3];
// let num = [2, 1, 1, 3, 2, 5, 4];
let num = [6, 1, 7];

function solution(num) {
  const result = num.sort((a, b) => a - b);
  console.log(result);
  return result;
}

solution(num);

// 시간복잡도 O(N^2)
function bubbleSort(arr) {
  const n = arr.length;  
  for (let i = 0; i < n; i++) {  
    for (let j = 0; j < n - i - 1; j++) { 
      if (arr[j + 1] < arr[j]) {  
        // 두 요소를 비교하여 교환
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;  // 정렬된 배열 반환
}

// 테스트: [1, -5, 2, 4, 3] 정렬
const arr = [1, -5, 2, 4, 3];
console.log(bubbleSort(arr));

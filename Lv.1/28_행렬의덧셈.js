// 행렬의 덧셈
// 행렬 덧셈의 결과를 반환하는 함수

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}

solution(arr1, arr2);

// 중첩 for문을 사용해 배열의 요소를 더한 뒤 결과값 출력

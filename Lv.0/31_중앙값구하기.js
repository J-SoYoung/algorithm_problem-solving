// let array = [1, 2, 7, 10, 11];
let array = [9, -1, 0];

function solution(array) {
  var answer = 0;
  array.sort((a, b) => a - b);
  const idx = Math.floor(array.length / 2);
  answer = array[idx]
  return answer;
}

solution(array);

// 중앙값을 구하는 방법으로 배열을 정렬한 후, 가운데 값을 반환하는 방법을 사용하였다. 

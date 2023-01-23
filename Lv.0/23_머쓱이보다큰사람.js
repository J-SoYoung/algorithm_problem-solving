// 머쓱이보다 키 큰 사람
// https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 머쓱이보다 키 큰 사람 수를 return 하도록

let array = [149, 180, 192, 170];
let height = 167;
// let array = [180, 120, 140]
// let height = 190

function solution(array, height) {
  var answer = 0;
  answer = array.filter((arr) => arr > height);
  console.log(answer);
  console.log(answer.length);
  return answer;
}

solution(array, height);

// array배열에 머쓱이 height를 추가하고, sort정렬을 시켜라 X
// map을 돌려서 머쓱이 height보다 큰 array요소를 return해서 length를 셀 것
// filter 돌려서 조건이 true 인 것만 return해 length를 셀 것

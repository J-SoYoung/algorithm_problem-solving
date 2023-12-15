// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// commands = [i, j, k]를 원소로 가진 2차원 배열
// i번째 ~ j번째 숫자를 자르고 정렬했을 때, k번째에 있는 수를 구하기
// commands의 결과값을 모두 배열에 담아라

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];
  commands.forEach((el) => {
    arrNum = array
      .slice(el[0] - 1, el[1])
      .sort((a, b) => a - b)
      .slice(el[2] - 1, el[2]);
    answer.push(arrNum);
  });
  answer = answer.flat();
  console.log(answer);
  return answer;
}

solution(array, commands);

/*
  commands라는 이중 배열의 각 요소를 사용해서 
  array를 조건에 맞게 연산한 결과들을 출력하는 문제였다 
  
  forEach를 사용해 commands의 배열 요소를 사용하였고
  array의 배열에 commands의 각 요소의 인덱스에 접근하여 데이터를 slice하였다
  result배열에 넣어 이중배열의 값을 flat상태로 만들어주었다
  */

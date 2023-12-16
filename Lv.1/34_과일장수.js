// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// score에 있는 과일들의 점수에서 m개씩으로 만든 상자의 최대이익의 결과를 반환하라

// let k = 3;
// let m = 4;
// let score = [1, 2, 3, 1, 2, 3, 1];
let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
  var answer = 0;
  newArr = [];

  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    newArr.push(score.slice(i, i + m));
  }
  
  newArr.forEach((ele, idx) => {
    if (ele.length < m) {
      return;
    } else {
      if (ele.length > 1) {
        for (let i = 0; i < ele.length; i += m) {
          return (answer += Math.min(...ele) * m);
        }
      } else {
        return (answer = Math.min(...ele) * m);
      }
    }
  });
  console.log(answer);
  return answer;
}

solution(k, m, score);

// score에 있는 사과점수를 sort하여 내림차순으로 정렬
// m개수 대로 끊어 새 배열(newArr)을 만든다
// newArr에서 최저 점수를 찾는다. * m => 새 배열의 개수만큼 반복한다.

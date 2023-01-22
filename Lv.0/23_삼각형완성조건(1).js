// 삼각형의 완성 조건
// https://school.programmers.co.kr/learn/courses/30/lessons/120889
// 조건 : 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 조건을 만족하면 1을, 만족하지 않으면 2를 반환하는 함수를 만들어라

// let sides = [1, 2, 3];
// let sides = [3, 6, 2];
let sides = [199, 72, 222];

function solution(sides) {
  var answer = 0;
  // const max = sides.sort((a, b) => b - a)[0];
  // const one = sides.sort((a, b) => b - a)[1];
  // const two = sides.sort((a, b) => b - a)[2];

  // answer = max < one + two ? 1 : 2;

  sides.sort((a, b) => b - a);
  answer = sides[0] < sides[1] + sides[2] ? 1 : 2;
  console.log(answer);
  return answer;
}

solution(sides);

// -------------------------------------------------------------
// 1. 가장 긴 변의 길이를 찾고
// 2. 1을 나머지 두 변의 길이보다 작은지 확인한 뒤
// 3. 맞으면 T : 1, 아니면 F : 2 를 return해라

// 주어진 배열에서 가장 긴 변을 찾기 위해서 sides를 내림차순으로 정렬해
// [0]번째를 max로 설정했다.
// 이후 1,2번째 원소를 더해 0번째보다 크면 삼각형 조건에 T:1 아니면 F:2
// 하도록 삼항연산자를 사용했다.

// 놓쳤던 부분
// sort는 원본 배열의 순서를 바꾸기 때문에 위에서 했던 것처럼 일이리
// sides에서 요소 하나하나를 변수에 할당해주지 않아도 됐다.
// sides의 [0], [1], [2]를 해도 됐음

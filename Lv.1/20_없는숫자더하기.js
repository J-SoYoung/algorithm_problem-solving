// 0-9까지의 숫자가 들어있는 배열 중에서 numbers에 들어있지 않은 숫자를 더해라
// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  var answer = "";

  answer =
    45 -
    numbers.reduce((acc, cur) => {
      return acc + cur;
    });
  console.log(answer);
}

solution(numbers);

// 들어있지 않은 숫자를 구하는 것이 아니라 그 수들의 합을 구하는 것이므로
// 전체 배열의 합에서 numbers의 합을 빼면 나머지 숫자의 합이 나오므로
// reducer를 활용해 numbers 배열 요소의 누적 합을 구한다.

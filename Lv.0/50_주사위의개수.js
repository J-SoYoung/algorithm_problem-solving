// 직육면체 안에 들어가는 정육면체의 주사위 개수를 구하라
// https://school.programmers.co.kr/learn/courses/30/lessons/120845

let box = [10, 8, 6];
let n = 3;

function solution(box, n) {
  var answer = 1;
  for (let i = 0; i < box.length; i++) {
    const num = Math.floor(box[i] / n);
    answer *= num;
  }
  console.log(answer);
  return answer;
}

solution(box, n);

// box[0],[1],[2]의 값을 n으로 나눈 몫들을 구하고
// 해당 몫을 곱하면 직육면체 안에 들어가는 주사위의 개수를 구할 수 있다.

// 반복문을 통해 box배열 요소를 n으로 나눈 몫을 구하고
// 몫들을 곱하여 직육면체 안에 들어가는 정육면체 주사위 개수를 구할 수 있다. 

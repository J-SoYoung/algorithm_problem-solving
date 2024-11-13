/**
 * 16-기능개발
 * 주어진 작업 진도와 개발속도를 기반으로 각 작업이 완료되어 배포될 때
 * 몇 개의 기능이 함께 배포되는지 계산하는 문제입니다.
 *
 * ///////// 제약 조건 ///////////
 * 작업 개수 (progresses, speeds의 배열 길이)는 100개 이하입니다.
 * 작업 진도는 100 미만의 자연수입니다.
 * 작업 속도는 100 이하의 자연수입니다.
 * 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
 * 예를 들어 진도율이 95%인 작업의 개발속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
 */

function solution(progresses, speeds) {
  var answer = [];
  let workingDay = [];
  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];

    let remaining = 100 - progress;
    workingDay.push(Math.ceil(remaining / speed));
  }

  let count = 0;
  let deployDay = workingDay[0];
  for (let i = 0; i < workingDay.length; i++) {
    if (workingDay[i] <= deployDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      deployDay = workingDay[i];
    }
  }
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1,3,2]

// 배포일자를 구해서 0번째 작업의 배포일보다 작은 작업이 있다면 count를 올려서 

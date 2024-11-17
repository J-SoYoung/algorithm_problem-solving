/** 프로세스 - 스택/큐
 * 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 
 * 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 
 * 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

  1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
  2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
  3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

   프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 
   우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행
 */

// 잘못 생각한 풀이 
// function solution(priorities, location) {
//   var answer = 0;
//   let queue = [];

//   // 우선순위 작업 찾기
//   const max = Math.max(...priorities);
//   const maxIndex = priorities.indexOf(max);
//   priorities[location] = 0;

//   // 우선순위 작업 순서의 대기열 생성
//   for (let i = 0; i < maxIndex; i++) {
//     priorities.push(priorities[i]);
//   }

//   for (let i = maxIndex; i < priorities.length; i++) {
//     queue.push(priorities[i]);
//   }
//   return (answer = queue.indexOf(0) + 1);
// }

function solution(priorities, location) {
  var answer = 0;
  let locationArray = [];

  // 위치배열 만들기
  for (let i = 0; i < priorities.length; i++) {
    locationArray.push(i);
  }

  while (priorities.length > 0) {
    const maxNumber = Math.max(...priorities);
    if (maxNumber > priorities[0]) {
      priorities.push(priorities.shift());
      locationArray.push(locationArray.shift());
    } else {
      answer += 1;
      priorities.shift();
      const locationShift = locationArray.shift();
      if (locationShift === location) {
        return answer;
      }
    }
  }
}
console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
console.log(solution([4, 2, 5, 3, 4], 3)); // 4

/**
 * 이 문제를 풀면서 어려웠던 점은 "위치배열"을 만드는 부분이었다.
 * 우선순위 배열 값에서 최대값보다 작은 값들을 shift하여서 해ㅍ 당 배열의 끝에 pop을 하는 것은 어렵지 않았지만
 * locaiton과 대조시킬 위치값을 너무 어렵게 생각했었다.
 * 반복문을 사용해 priorities와 같은 길이의 배열을 생성하고 이를 위치배열로 지정하였다. 
 */

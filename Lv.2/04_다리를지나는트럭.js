/**
 * < 다리를 지나는 트럭 >
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 
다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 
최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 */

/**
 * 순서대로 다리를 지나야 한다!!!!!!!!!! => 큐를 사용해야 한다.
 * 트럭이 다리를 지날 때 무게를 빼지 않았다는 점.
 * 다리 위로 올라올 때와 지나갈 때의 상황을 확인하지 못한 점
 */

// function solution(bridge_length, weight, truck_weights) {
//   let time = 0;
//   let bridges = [];

//   let bridgeSum = 0;
//   bridges.forEach((item) => (bridgeSum += item));

//   // while (truck_weights.length > 0) {
//   for (let i = 0; i < truck_weights.length; i++) {
//     if (bridges.length === 0) {
//       // 다리가 비어있으면
//       bridges.push(truck_weights[i]);
//       time += 1;
//     } else if (bridges.length < bridge_length) {
//       // 다리가 비어있지 않으면
//       time += 1;
//       if (bridgeSum < weight) {
//         // 다리 무게가 weight보다 작으면
//         bridges.push(truck_weights[i]);
//         time += 1;
//       } else {
//         // 다리 무게가 weight보다 크면
//         bridges.shift();
//         truck_weights.shift();
//       }
//     } else {
//       time += 1;
//     }
//   }
//   // }
//   return time;
// }

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridges = Array(bridge_length).fill(0);
  let bridgeSum = 0;

  while (truck_weights.length > 0 || bridgeSum > 0) {
    answer++;
    // 1. 다리를 건넌 트럭 제거
    const truck = bridges.shift();
    bridgeSum -= truck; // 다리 위 무게에서 제거

    // 2. 새로운 트럭 추가 가능 여부 확인
    if (truck_weights.length > 0) {
      if (bridgeSum + truck_weights[0] <= weight) {
        const newTruck = truck_weights.shift(); // 대기 트럭을 다리 위로 올림
        bridges.push(newTruck);
        bridgeSum += newTruck; // 다리 위 무게 갱신
      } else {
        bridges.push(0); // 트럭을 추가할 수 없으면 빈 공간 유지
      }
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //	8
// console.log(solution(100, 100, [10])); //	101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //	110

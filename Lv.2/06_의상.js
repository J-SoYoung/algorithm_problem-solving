/**
 * < 의상 - 해시 > https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 
 * 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
 * 착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 
 * 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
 * 
 * 코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 
 * 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
 * 
 */

// 예시만 만족한 케이스 
// function solution(clothes) {
//   var answer = 0;

//   for (let i = 0; i < clothes.length; i++) {
//     answer += 1; // 각 의상을 단독으로 입는 경우
//     for (let j = i + 1; j < clothes.length; j++) {
//       // 서로 다른 종류의 옷을 조합하는 경우
//       console.log(clothes[i][1], clothes[j][1]);
//       if (clothes[i][1] !== clothes[j][1]) answer += 1;
//     }
//   }
//   return answer;
// }

function solution(clothes) {
  let answer = 1;
  const clothesMap = new Map(clothes);
  const resultMap = new Map();

  for (let [_, value] of clothesMap) {
    resultMap.set(value, (resultMap.get(value) || 1) + 1);
  }
  for (let [_, value] of resultMap) {
    answer *= value;
  }
  answer -= 1;
  return answer;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); //5

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); //3

console.log(
  solution([
    ["red_hat", "headgear"],
    ["blue_hat", "headgear"],
    ["black_glasses", "eyewear"],
    ["white_glasses", "eyewear"],
  ])
); //8

console.log(
  solution([
    ["leather_jacket", "outerwear"],
    ["hoodie", "outerwear"],
    ["scarf", "accessory"],
    ["sunglasses", "accessory"],
    ["cap", "headgear"],
  ])
); // 17

console.log(
  solution([
    ["black_shirt", "top"],
    ["blue_shirt", "top"],
    ["jeans", "bottom"],
    ["sweatpants", "bottom"],
    ["cap", "headgear"],
    ["beanie", "headgear"],
  ])
); // 26

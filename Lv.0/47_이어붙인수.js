// https://school.programmers.co.kr/learn/courses/30/lessons/181928
// 주어진 list에서 홀수만 이어붙인 숫자와 짝수만 이어붙인 숫자의 합을 구하라

// let num_list = [3, 4, 5, 2, 1];
let num_list = [5, 7, 8, 3];

function solution(num_list) {
  var answer = 0;
  let odd = ""; 
  let even = ""; 
  num_list.map((num) => {
    return num % 2 === 0 ? (odd += num) : (even += num);
  });
  answer = Number(odd) + Number(even);
  return answer;
}
solution(num_list);

// arr에서 홀수와 짝수를 구해서 숫자를 만들어라
// map을 돌려서 각 요소를 순회한 뒤 홀,짝인 수를 분리하여 각 변수에 할당한다.
// 각 변수에 할당된 값을 숫자로 형 변환하여 더한다
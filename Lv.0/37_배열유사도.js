// let s1 = ["n", "omg"];
// let s2 = ["m", "dot"];
let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      answer += 1;
    }
  }
  return answer;
}

solution(s1, s2);

// s2 배열의 요소를 처음부터 끝까지 하나씩 순회하며, 
// 각 요소가 s1 배열에 포함되어 있는지 확인하고, 
// 포함되어 있다면 answer 변수를 증가시키는 방식으로 작동
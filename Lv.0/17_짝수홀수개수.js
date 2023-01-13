// 문제 num_list의 원소 중 짝수와 홀수의 개수를 담은
// 배열을 return 하도록 solution 함수를 완성해보세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120824

let num_list = [1, 2, 3, 4, 5];
// let num_list	 = [1, 3, 5, 7]

// 방법1
// 1. 배열에 메소드인 map에서 조건을 사용해 홀-짝을 나눈다
// 2. 홀/짝의 개수를 세어서 answer에 push한다
// function solution(num_list) {
//   var answer = [];
//   const even = [];
//   const odd = [];

//   num_list.map((n) => {
//     return n % 2 === 0 ? even.push(n) : odd.push(n);
//   });
//   answer.push(even.length, odd.length);
//   return answer;
// }

// 방법2
// answer의 배열 안에서 값을 넣어 바로 출력한다.
// 변수를 따로 지정할 필요가 없다! 오.
function solution(num_list) {
  var answer = [];
  answer = [
    num_list.filter((n) => n % 2 === 0).length,
    num_list.filter((n) => n % 2 !== 0).length,
  ];
  console.log(answer);
  return answer;
}

solution(num_list);

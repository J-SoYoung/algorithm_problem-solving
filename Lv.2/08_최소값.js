/* < 최소값 만들기 > 
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. 
 */

/**
 * 풀이 !!!
 * max*max보다 min*max를 곱하는 게 최소값을 만드는 데 유리하므로
 * 주어진 배열을 오름/내림차순으로 정렬하여
 * 곱하여지는 두 값의 크기를 조절한다.
 */

// function solution(A, B) {
//   let answer = 0;
//   A.sort((a, b) => a - b);
//   B.sort((a, b) => b - a);

//   for (i = 0; i < A.length; i++) {
//     answer += A[i] * B[i];
//   }

//   return answer;
// }
// console.log(solution([1, 4, 2], [5, 4, 4])); //29
// console.log(solution([1, 2], [3, 4])); //10

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return (answer = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0));
}
console.log(solution([1, 4, 2], [5, 4, 4])); //29
console.log(solution([1, 2], [3, 4])); //10

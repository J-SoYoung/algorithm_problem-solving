/** 두 개 뽑아서 더하기
 * 정수배열 number가 주어질 때,
 * number에서 서로 다르 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는
 * 모든 수를 배열에 오름차순으로 담아 반환하는 solution함수를 완성하라
 *
 * 제약조건
 * numbers의 길이는 2~100 이하다
 * numbers의 모든 수는 0이상 100이하다
 * 
 * 문제풀이
 * 배열의 0번 인덱스에서 더해야 하는 값은 1번-마지막 인덱스까지이다
 * 배열의 1번 인덱스에서 더해야 하는 값은 2번-마지막 인덱스까지이다.
 * 반복문을 돌면서 현재 index와 그보다+1이 더 큰 인덱스부터 마지막 인덱스까지 더해 배열에 넣는다. 
 * 이후 new Set()객체를 통해 중복을 제거하고 
 * sort메서드를 통해서 오름차순으로 정렬한다. 
 */

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)].sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

/**
 * 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
 */

function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  answer = min + " " + max;
  return answer;
}

console.log(solution("1 2 3 4")); //"1 4"
console.log(solution("-1 -2 -3 -4")); //"-4 -1"
console.log(solution("-1 -1")); //"-1 -1"

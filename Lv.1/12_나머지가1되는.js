let n = 12;
// let num = 4

// 1_풀이 내생각
function solution(n) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (n % i === 1) arr.push(i);
  }
  // for문의 결과값을 굳이 arr에 넣지 않아도
  // 제일 처음 true가 나온 i가 최소숫자이므로
  // return i로 끝날 수 있다.
  return (answer = Math.min(...arr));
}
solution(n);

// 2_코드 줄이기. 불필요한 코드는 생략
function solution(n) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    if (n % i === 1) return (answer = i);
  }
}
solution(n);

// ## 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// ## think
// n을 x로 나눈 나머지. x의 값들 중 최소값을 구하는 내용이다.
// 문자 그대로를 생각하지 말고, 문제에서 주어진 것들에 집중해서 생각해보자.
// **n을 나눠야 하니까, 1부터 n까지의 숫자가 x의 범위가 될 수 있다.**

// - n % n을 for문으로 돌려서
// - 나머지가 1인 것들만 출력해서
// - 그 중에 최소값을 골라라.
// <br>
// <br>

// - 최소값을 찾는 것은 맞지만 ㅋㅋ 정말 문자그대로 최소값을 찾기 위해<br>
//   Math.min()을 사용했다. 하지만 코드의 흐름상 for문에서 true의 결과값은<br>
//   1부터 ~ n번까지의 순서대로 나오기 때문에 제일 처음에 나오는 i가 최소값이다<br>
//   여기까지 생각했으면 arr에 push를 하지 않아도 됐다!<br>
//   '풀었으니 됐다. 넘어가자'라고 생각했으면, 이런 발전이 없었을것이다!<br>
//   '문자 그대로의 이해'보다 한 단계 업그레이드 될 때까지! 생각하고 또 생각하자<br>

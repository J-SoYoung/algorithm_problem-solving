// 문자열 내림차순
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수를 완성해주세요.

let s = "Zbcdefg";

function solution(s) {
  var answer = "";
  let string = s.split("");
  answer = string
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    })
    .join("");
  console.log(answer);
}

solution(s);

// 비교함수
// if (a < b) return 1;은 a가 b보다 큰 경우를 나타내며, 
// 이 경우 a가 배열에서 뒤로 이동합니다. 
// 반면에 if (a > b) return -1;은 a가 b보다 작은 경우이며
// a가 배열에서 앞으로 이동합니다

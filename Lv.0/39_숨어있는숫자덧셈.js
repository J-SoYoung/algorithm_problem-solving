// https://school.programmers.co.kr/learn/courses/30/lessons/120851
// my_string안의 자연수들의 합을 구하라

let my_string = "aAb1B2cC34oOp";

function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(Number(my_string[i]))) {
      answer += Number(my_string[i]);
    }
  }
  console.log(answer);
  return answer;
}
solution(my_string);

// my_string의 인덱스별로 요소가 숫자인지 아닌지 판별한다. 
// Number로 형변환을 하였을 때, 숫자타입의 값만
// answer에 += 값을 할당한다. 

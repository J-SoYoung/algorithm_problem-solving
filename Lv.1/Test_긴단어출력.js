// 문제1. 주어진 문자열에서 가장 긴 단어를 찾아라
// 주어진 예시의 부호를 먼저 없앤다 / 띄어쓰기 기준으로 단어를 나눠 비교한다.


// let words = "His profession is a computer programer";
let words =
  "코로나 19 로 재택근무 들어간 화성탐사팀. 5460만km '큐리오시티!', 로봇 원격 조작에 성공";

function solution(words) {
  let answer = "";
  const checkWords = words.replace(/[.,'!]+/g, "");
  const wordsArr = checkWords.split(" ");
  
  for (const word of wordsArr) {
    if (word.length > answer.length) {
      answer = word;
    }
  }
  console.log(answer)
  return answer;
}

solution(words);

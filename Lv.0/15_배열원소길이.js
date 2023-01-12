let strlist = ["We", "are", "the", "world!"];
// [2, 3, 3, 6]
// let strlist = ["I", "Love", "Programmers."]
// [1, 4, 12]

function solution(strlist) {
  var answer = [];
  answer = strlist.map((s) => s.length);
  return answer;
}

solution(strlist);

// map을 돌려서 각 요소들의 단어 개수를 센다
// 단어 갯수...를 센다 length
// 다시 배열을 만든다

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다

// 이상한 문자
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

let s = "try hello world";

function solution(s) {
  let result = "";
  let strs = s.split(" ");

  for (let str of strs) {
    // strs배열을 돌면서 각 요소를 출력
    for (let i in str) {
      // for in => str요소의 인덱스를 출력
      // i인덱스가 짝수면 대문자, 홀수면 소문자를 출력하고
      // ** 결과값에 넣어준다 **
      result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
      console.log(result);
    }
    // 한개의 요소가 끝날 때마다 공백을 넣어준다.
    result += " ";
  }
  console.log(result.slice(0, -1));
  return result.slice(0, -1);
}

solution(s);

// 과정
// 문자열을 쪼갠다.
// for - of, for - in문을 활용해 요소와 인덱스를 출력해 홀수 짝수를 찾는다.
// toUppercase/ toLowerCase메서드를 활용해 홀수 - 소문자 , 짝수 - 대문자로 바꾼다
// 이중 for문을 사용했으므로 한개의 요소가 끝날 때마다 공백을 넣어준다.

// Infomation

// return은 for문을 한 번 돌고 for문 밖으로 나가는 것이기 때문에
// ( 함수 실행을 종료하고, 주어진 값을 함수 호출 시점으로 반환하는 역할 )
// for문이 끝날 때까지 return은 사용하지 않아야 한다!!!!

// for...of
// 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서
// 반복하고 각 개별 속성값을 출력한다.

// for...in
// 상속된 열거 가능한 속성(중첩for)들을 포함, 객체에서 문자열로 키가 지정된 속성에 대해 반복합니다.

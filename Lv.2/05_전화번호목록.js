/**
 * < 전화번호 목록 >
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
  구조대 : 119
  박준영 : 97 674 223
  지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

접두어 비교시 sort() 정렬을 통해
접두어와 가장 가까운 단어들을 먼저 비교할 수 있게 한다.
이후 startsWith() 메서드를 활용해 단어를 체크한다
  */

function solution(phone_book) {
  phone_book.sort();
  console.log(phone_book);

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
// console.log(solution(["123", "456", "789"])); // true
// console.log(solution(["12", "123", "1235", "567", "88"])); //false

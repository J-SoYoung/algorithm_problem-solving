////////////////////////////////
/** 중복된 문자 찾기
 * 주어진 문자열에 중복된 문자가 있는지 확인하세요.
 * 해시 테이블을 사용해 문자의 등장 여부를 빠르게 체크하세요.
 * 중복된 문자가 있다면 true를, 없다면 false를 반환합니다.
 */
/////////////////////////////////

////////////////////////////////
/** 문제풀이 Set객체를 사용함
 * JavaScript의 new Set()자료구조형으로 중복된 string을 없앤다.
 * 주어진 string의 길이와 set자료구조로 넣은 string의 길이를 비교해본다
 * string의 길이에 차이가 있다면 중복string이 있다는 뜻이므로 true을 반환한다.
 */
/////////////////////////////////

function solution(s) {
  const newStr = new Set(s);
  if (s.length !== newStr.size) {
    return true;
  }
  return false;
}

console.log(solution("apple")); //result = true
console.log(solution("orange")); //result = false
console.log(solution("programming")); //result = true


function solution2 (){
  
}

console.log(solution2("apple")); //result = true
console.log(solution2("orange")); //result = false
console.log(solution2("programming")); //result = true

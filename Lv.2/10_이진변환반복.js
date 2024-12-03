// function solution(s) {
//   let zeroCount = 0;
//   let binaryCount = 0;
//   binaryCount += 1;

//   console.log(s);
//   while (s !== "1") {
//     zeroCount += s.split("0").length - 1;
//     s = s.replaceAll("0", "");

//     let strLength = s.length;
//     let arr = [];
//     while (strLength > 1) {
//       // length를 이진수로 변환하기 위해 나눔
//       let quotient = strLength / 2; // 몫
//       let remainder = strLength % 2; // 나머지

//       // 이진수 변환 ( 나머지 값을 arr추가 )
//       remainder === 0 ? arr.push(0) : arr.push(1);
//       // length가 1이 될때까지 나누기 위해 몫을 strLength로 재할당
//       strLength = quotient;
//     }
//     arr.reverse(); // while에서 추가한 arr의 나머지를 뒤집음
//     s = arr.join(""); // join은 새로운 문자열을 반환, 원본 데이터를 변경하지 않는다
//   }

//   return [binaryCount, zeroCount];
// }

function solution(s) {
  let zeroCount = 0;
  let binaryCount = 0;

  console.log(s.split("0").length);
  while (s !== "1") {
    zeroCount += s.split("0").length - 1;
    binaryCount += 1;

    s = s.replaceAll("0", "");
    s = s.length.toString(2);
  }

  return [binaryCount, zeroCount];
}

console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
console.log(solution("1111111")); //[4,1]

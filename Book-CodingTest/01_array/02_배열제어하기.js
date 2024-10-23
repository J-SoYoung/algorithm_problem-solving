// 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬하라 
// 제약조건
// 정수 배열의 길이는 2이상 1000 이하입니다
// 정수 배열의 각 데이터 값은 -100,000이상 100,000이하 입니다

let num = [4, 2, 2, 1, 3, 4];
// let num = [2, 1, 1, 3, 2, 5, 4];

function solution(num) {
  const uniqueArr = [...new Set(num)];
  console.log(uniqueArr);
  uniqueArr.sort((a, b) => b - a);
  console.log(uniqueArr);
  return uniqueArr;
}

solution(num);

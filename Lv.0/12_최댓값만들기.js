// https://school.programmers.co.kr/learn/courses/30/lessons/120847
// 프로그래머스 Lv0_최댓값만들기

// let numbers = [1, 2, 3, 4, 5]	
let numbers = [0, 31, 24, 10, 1, 9]	


function solution(numbers) {
  var answer = 0;
  // console.log(Math.max(...numbers))
  numbers.sort((a,b) =>b-a )
  answer = numbers[0] * numbers[1]
  return answer;
}

solution(numbers)


// 가장 큰 수 2개를 찾아서 곱해라
// 문제를 푸는 방법은 여러가지가 있다!!! 
// 오늘의 방법은 sort 를 쓰는 것이었다.

// sort는 배열의 요소를 정렬해준다. => 배열 자체가 변경된다
// 배열 요소를 문자열로 취급해 정렬한다 => 우리가 생각한 것과는 다르게 출력될 것
// sort함수에 비교함수를 넣어줘야 한다. 

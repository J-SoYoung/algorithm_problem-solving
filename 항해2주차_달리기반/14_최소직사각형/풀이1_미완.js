let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]	
// let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	
// let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	

// let num = 4


function solution(sizes) {
  var answer = 0;
  const a = sizes.flat().sort().reverse()
  const arr = a.filter((size,idx,arr)=> {
    return ( size === arr[0] || size === arr[(arr.length)/2] )
  })
  // 여기서 문제인거같기도하고. ㅇㅅㅇ ㅋㅋㅋㅋㅋ
  // 다음에 더 풀어보자. 
  answer = arr.reduce((a,b)=> a*b)
  console.log(answer)
  return answer;

}
solution(sizes)


// console.log(a)
// console.log(size === arr[0] || size === arr[(arr.length)/2])
// console.log(arr)
// console.log(arr.reduce((a,b)=> a*b))

// 구현의 계획. 실현은 아직.
// 세로의 모양을 가로로 눕혀서 사용할 수 있다고 했으니
// 가로,세로 구분이 없다고 봐도 무방하다고 봄. 
// 배열을 합쳐서 정렬 후, 0번째 인덱스 + 반 나눠 첫번째 인덱스 출력 -> 안되더라 ㅋㅋㅋ

// 문제를 잘못이해했나. 
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
let arr = [4,3,2,1,5]
// let arr = [10] // 두번째 예시 이해안감
// let num = 4


function solution(arr) {
  var answer = [];

  if(arr.length === 1) {
    answer.push(-1)
  }else{
  arr.sort((a,b)=>b-a).pop()
  answer = arr
  }
  console.log(answer )
  return answer;
}
// 테스트는 맞는데 ㅇㅅㅇ. 코드실행하면 틀림
// 문제에서 내가 놓친것은 무엇??

// 원본배열을 바꾸면 안되는 경우인 것 같음


solution(arr)

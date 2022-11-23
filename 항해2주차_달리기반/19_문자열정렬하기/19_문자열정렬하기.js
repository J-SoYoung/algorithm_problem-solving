// let n = 1;
// let strings = ["sun", "bed", "car"]
let n = 2;
let strings = ["abce", "abcd", "cdx"]


function solution(strings, n) {
  var answer = strings.sort((a,b)=> {
    // 오름차순
    if(a[n] < b[n]) return -1;
    // 내림차순 
    if(a[n] > b[n]) return 1;
    // 비교하는 문자가 같은 경우일 때
    if(a[n] === b[n]) {
      if(a < b) return -1
      if(a > b) return 1
      return 0
    } 
  })
  console.log(answer )
  return answer;
}

solution(strings, n)



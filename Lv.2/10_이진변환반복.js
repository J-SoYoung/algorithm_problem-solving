
function solution(s) {
  let strReturn = ''
  let zeroCount = 0
  let binaryCount = 0
  
  zeroCount += s.split('0').length -1
  s = s.replaceAll('0','')
  
  let strLength = s.length;
  let arr = []
  while(strLength > 1){
    let quotient = strLength / 2 // 몫
    let remainder = strLength % 2  // 나머지

    remainder===0 ? arr.push(0) : arr.push(1)
    strLength = quotient
  }
  arr.reverse()
  s = arr.join('') //join은 새로운 문자열을 반환, 원본 데이터를 변경하지 않는다 
  return [ binaryCount, zeroCount ];
}

// function solution(s) {
//   var answer = []

//   s = s.replaceAll('0','')
//   let strLength = s.length;

//   while(strLength > 1){
//     let quotient = strLength / 2 //몫
//     let remainder = strLength % 2  // 나머지

//     remainder===0 ? answer.push(0) : answer.push(1)
//     // remainder===0 ? answer+=0 : answer+=1
//     strLength = quotient
//   }
//   answer.reverse()
//   answer.join(' ')
//   console.log(answer)

//   return answer;
// }


console.log(solution("110010101001"	))
// console.log(solution("01110"	))
// console.log(solution("1111111"	))

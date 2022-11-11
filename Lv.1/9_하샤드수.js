let x = 13
let l = '' // 자릿수쪼갬
let sum = 0 // 자릿수합

function solution(x) {
  var answer = 0;
    // console.log((x+''.split('')).length)
    l = (x+''.split(''))
    for (let i=0; i<l.length; i++){
      sum += +l[i]
      // console.log(sum)
    }
    answer = x % sum === 0  ? true : false
    // console.log(answer)

  return answer;
}

solution(x)



// 두 수를 쪼개고 x.length

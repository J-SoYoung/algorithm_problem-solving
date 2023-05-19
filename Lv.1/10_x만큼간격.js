let x = -4
let n = 2
let mul = 0


function solution(x, n) {
  var answer = [];
  for (let i=1; i<=n; i++){
    mul = x*[i]
    answer.push(mul)
    console.log(answer)
  }

  return answer;
}

solution(x, n)



// 증가! x씩 n번 더한다 -> 배열에 넣어라
// for문 x부터 n까지 x만큼 증가하는거 push
// let n = 6
let n = 16
// let n = 626331

function solution(n) {
  let answer = 0;
  
  while (n !== 1){
    if(n % 2 === 0 ){
      n = n / 2
    }else {
      n = ( n * 3 ) +1
    } 
    answer ++
  }
  if (answer > 500) answer = -1


  console.log(answer)
  return answer;
}


solution(n)

// 주어진 수가 1이 될 때까지 아래의 식을 반복하라. 라는 문제로 코드를 짤 때, 문장에 주어진 말 그대로 ‘수가 1이 될 때까지 실행해라’ 보다는 ‘1이 아니라면 실행해라.’ 와 같이 생각할 수도 있어야 한다. 
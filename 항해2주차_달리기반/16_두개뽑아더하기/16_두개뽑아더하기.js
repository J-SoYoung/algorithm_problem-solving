// let numbers = [2,1,3,4,1]	
let numbers = [5,0,2,7]	

function solution(numbers) {
  var answer = [];

  // 이중for문 : i의 숫자를 제외하고 나머지 값으로 j문을 돌림
  // i의 마지막 인덱스는 j의 숫자여아 하니까 -1해줌
  // j는 i와 똑같이 시작하면 안되고, i보다 다음 인덱스에서 시작해야 하므로
  // j의 시작은 i+1부터이다. 
  // for문에서 두 수를 더하는데, 중복은 있으면 안된다.  
  // answer에 값을 for문의 i와 j의 합을 넣을건데, 
  // 문자열이 포함되어 있지 않으면 실행하라. = 중복되면 실행X

  for (let i=0; i<numbers.length-1; i++){
    // console.log(`--- i임${numbers[i]}------`)
    for (let j=i+1; j<numbers.length; j++){
      // console.log(numbers[j])
      if(!answer.includes(numbers[i]+numbers[j])){
        // console.log(numbers[i]+numbers[j])
        answer.push(numbers[i]+numbers[j])
      }
    }
  }
  console.log(answer)
  answer.sort((a,b)=> a-b)
  console.log(answer)
  return answer;
}

solution(numbers)

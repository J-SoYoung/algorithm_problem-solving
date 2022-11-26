let arr = [4,3,2,1]	
// let arr = [10]	

// 0. 배열의 길이가 1이면 -1반환
// 1. 그렇지 않으면 
// 최소숫자 찾을 때, 배열복사 -> min찾기 배열에서 최소숫자를 구한다
// 2. 최소숫자가 있는 인덱스를 찾아서 
// 3. filter나 for문을 사용해 인덱스가 맞으면 뺀다.

function solution(arr) {
  var answer = [];
  let copy =[]

  if (arr.length === 1){
    answer.push(-1)
    return answer
  }else {
    copy = arr
    let min = Math.min(...copy)
    answer = arr.filter((n,idx)=>{
      // console.log(n !== min)
      return +n !== +min
    })
    console.log(answer)
    return answer
  }


  return answer;
}

solution(arr)


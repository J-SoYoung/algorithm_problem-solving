let arr = [4, 3, 2, 1];
// let arr = [10]

// 0. 배열의 길이가 1이면 -1반환
// 1. 그렇지 않으면
// 최소숫자 찾을 때, 배열복사 -> min찾기 배열에서 최소숫자를 구한다
// 2. 최소숫자가 있는 인덱스를 찾아서
// 3. filter나 for문을 사용해 인덱스가 맞으면 뺀다.

function solution(arr) {
  var answer = [];
  let copy = [];

  if (arr.length === 1) {
    answer.push(-1);
    return answer;
  } else {
    copy = arr;
    let min = Math.min(...copy);
    answer = arr.filter((n, idx) => {
      // console.log(n !== min)
      return +n !== +min;
    });
    console.log(answer);
    return answer;
  }

  return answer;
}

solution(arr);

// ## think
// 0. 배열의 길이가 1이면 -1반환
// 1. 그렇지 않으면 정렬
// 2. 배열에서 가장 작은 수 찾기인 줄 알았으나.... 채점해 보니 온통 빨간불이 들어왔다.
// 입출력 예에서는 4,3,2,1 => 순서가 있는 배열처럼 보여서 sort를 하면
// 될 것 같다는 생각을 하게 했지만, 원본 배열을 건드리지 않으면서 최소 숫자를 뺀 배열을 리턴하는 게 핵심인 것 같았다.<br>
// <br>

// **다시 THink**
// 0. 배열의 길이가 1이면 -1반환
// 1. 그렇지 않으면 배열에서 최소숫자를 구한다
// 2. 최소숫자가 있는 인덱스를 찾아서
// 3. filter나 for문을 사용해 인덱스가 맞으면 뺀다.

// ### 문제를 풀면서
// 원본배열은 건드리지 않는 선에서 문제를 해결해야 한다는 부분을 읽은 적이 있다. 그때는 무심코 넘겼는데, 막상 문제를 풀어보니 어떤 의미인지 알게 되었다. 문법 따로 코드 따로가 아닌, 코드를 짜면서도 문법과 연관지어 생각할 수 있어야 될 것 같다.

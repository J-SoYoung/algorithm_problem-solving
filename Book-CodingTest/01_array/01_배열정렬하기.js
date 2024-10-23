// 제약조건
// 정수 배열의 길이는 2이상 10^5 이하입니다
// 정수 배열의 각 데이터 값은 -100,000이상 100,000이하 입니다

// let num = [1, -5, 2, 4, 3];
// let num = [2, 1, 1, 3, 2, 5, 4];
let num = [6, 1, 7];

function solution(num) {
  const result = num.sort((a, b) => a - b);
  console.log(result);
  return result;
}

solution(num);

function bubbleSort(arr){
  const n = arr.length
  for(let i=0; i<n; i++){
    for (let j=0; j <n-1; j++){
      if(arr[j+1] < arr[j]){
        
      }
    }
  }
}
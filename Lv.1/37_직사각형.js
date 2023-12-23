// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 모든 배열의 가로-세로를 포함할 수 있는 값을 구해 곱하라.

// let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
// let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	
let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]


function solution(sizes) {
  var answer = 0;
  let maxList = []
  let minList = []

  sizes.forEach((ele) => { 
    ele.sort((a,b)=> b-a)
    maxList.push(ele[0])
    minList.push(ele[1])
  });
  
  const maxNumber= (arr)=> {
    return Math.max(...arr)
  }

  answer = maxNumber(maxList) * maxNumber(minList)
  console.log(answer)  

  return answer;
}

solution(sizes);

// sizes의 배열에서 각 배열의 원소들을 큰수, 작은수로 정렬한다
// 각 원소배열의 0,1번째 인덱스에서 가장 큰 수를 찾아 곱한다
// 배열 비교하기 
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

// const arr1 = [49, 13]	
// const arr2 = [70, 11, 2]	

const arr1 = [100, 17, 84, 1]
const arr2 = [55, 12, 65, 36]

// const arr1 =[1, 2, 3, 4, 5]
// const arr2 =[3, 3, 3, 3, 3]

function reduceFunc(arr){
  const result = arr.reduce((acc, cur) => acc + cur )
  return result
}

function solution(arr1, arr2) {
  var answer = 0;
  if (arr1.length != arr2.length){
  arr1.length > arr2.length ? answer = 1 : answer = -1
}else {
  const sum_arr1 = reduceFunc(arr1)
  const sum_arr2 = reduceFunc(arr2)
  sum_arr1 == sum_arr2 ? answer = 0 : sum_arr1 > sum_arr2 ? answer = 1 : answer = -1 
}
return answer;
}


solution(arr1, arr2);

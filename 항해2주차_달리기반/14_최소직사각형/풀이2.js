let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]	
// let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	
// let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	


function solution(sizes){
  let big = 0;
  let small = 0;
  
  for(let len of sizes) {
  //len[0]이 가로길이, len[1]이 세로길이 이다.
    if(len[0] > len[1]){ // 가로가 더 긴 경우
      if(big < len[0]) big = len[0];
      if(small < len[1]) small = len[1];
    }
    else { // 세로가 더 긴 경우
      if(big < len[1]) big = len[1];
      if(small < len[0]) small = len[0];
    }
  };
  console.log(big * small)
  return big * small;
}

solution(sizes)
// 더 긴 길이 중에서 최댓값을 big, 더 짧은 길이 중에서 최댓값을 small로 선언해주고
// 반복문을 돌려서 가로길이와 세로길이 중에 더 큰값은 big과 비교해서 big보다 크면 big에 그 값을 재할당 해주고, 작은 값은 small과 비교해서 small보다 크면 small에 그 값을 재할당 해준다.
// 이렇게 반복문을 다 돌리면 big에는 더 긴 길이중에 최댓값이 되어 있을 것이고, small에는 더 짧은 길이중에 최댓값이 되어있을 


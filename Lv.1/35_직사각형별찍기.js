let n = 5
let m = 3

function solution(n, m) {
  var answer = "";

  for ( let i=0; i< m; i++){
    for ( let j=0; j<n; j++){
      answer += '*'
      
    }
    answer += `\n` }
  return answer;
}

solution(n,m);

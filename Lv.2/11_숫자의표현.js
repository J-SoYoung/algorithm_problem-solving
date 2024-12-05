function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    sum += i;

    if (i === n) answer += 1;
    
    for (let j = i + 1; j <= n - i; j++) {
      sum += j;
      if (sum > n) {
        break;
      } else if (sum === n) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}

// console.log("answer -- ", solution(5)); //4
console.log("<answer> ", solution(15)); //4

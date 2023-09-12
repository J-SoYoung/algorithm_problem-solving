let n = "5 3";

function solution(n) {
  const a = n.split(" ")[0];
  const b = n.split(" ")[1];
  var answer = "";
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    answer += `${row}\n`;
  }
  console.log(answer);
  return answer;
}

solution(n);

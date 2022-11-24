let seoul = ["Jane", "Kim"]

function solution(seoul) {
  var answer = '';
  // k = seoul.indexOf('Kim')
  answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`
  console.log(answer)
  return answer;
}

solution(seoul)

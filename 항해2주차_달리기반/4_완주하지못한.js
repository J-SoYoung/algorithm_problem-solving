let participant = ["leo", "kiki", "eden"]
let completion = 	["eden", "kiki"]

function solution(participant, completion) {
  var answer = '';
participant.sort()
completion.sort()
  console.log(participant)

  for (let i=0; i<participant.length; i++){
    participant[i] === completion[i] ? answer : answer = participant[i]
  }
  console.log(answer)
  return answer;
}

solution(participant, completion)

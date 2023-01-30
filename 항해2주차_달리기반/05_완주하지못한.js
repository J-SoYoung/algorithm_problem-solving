let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

solution(participant, completion);

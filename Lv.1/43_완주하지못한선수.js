function solution(participant, completion) {
  let goal = new Map();

  for (let i = 0; i < participant.length; i++) {
    goal.set(participant[i], (goal.get(participant[i]) || 0) + 1);
  }

  for (let i = 0; i < participant.length; i++) {
    if (goal.has(completion[i])) {
      goal.set(completion[i], goal.get(completion[i]) - 1);
    }
  }

  for (let [key, value] of goal) {
    if (value > 0) return key
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); //vinko

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //mislav

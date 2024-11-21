/** 완주하지 못한 선수
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
 * 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
 * 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 * 
 * "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
 * "mislav"는 참여자 명단에 두 명, 완주자 명단에는 한 명, 한명은 완주하지 못했습니다.
 */

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

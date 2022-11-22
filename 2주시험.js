let month = 11
let day = 27


function solution(month, day){
	let result=""
  // 항해 시작한 날
  let hangStart = new Date(`2022/${month}/${day}/10:00:00`)
  // 항해 98일 
  let hang = hangStart.setMilliseconds(1000 * 60 * 60 * 24 * 98)
  // console.log(hang)
  // 항해 끝나는 날
  let hangEnd = new Date(hang)
  // console.log(hangEnd)

  let days = hangEnd.toISOString().slice(0,10).split('-')
  console.log(days)

  let m = +days[1][0] === 0 ? days[1] = days[1][1] : days[1]
  let d = +days[2][0] === 0 ? days[2] = days[2][1] : days[2]
  
  return result = `${m}월 ${d}일`
}
console.log(solution(1,18))
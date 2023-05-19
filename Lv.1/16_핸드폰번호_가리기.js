// let phone_number = "01033334444"	
let phone_number = "027778888"	


function solution(phone_number) {
  var answer = '';
  let star = '*'.repeat(phone_number.length-4)
  let num = phone_number.slice(-4)

  // console.log(star + num)
  answer = star + num

  return answer;
}
solution(phone_number)

 
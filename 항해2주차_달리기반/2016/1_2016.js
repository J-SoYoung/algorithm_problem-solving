let a = 5
let b = 24
// let num = 4


function solution(a, b) {
  var answer = '';
  let arr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let d = (`2016-${a}-${b}`)
  
  let today = new Date(2016, a-1, b)
  console.log(today) 
  let day = today.getDay()
  answer = arr[day]
  return answer;
}

solution(a,b)

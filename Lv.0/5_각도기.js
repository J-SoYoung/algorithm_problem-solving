// let angle = 70
// let angle = 90
let angle =180
// let num = 4


function solution(angle) {
  var answer = 0;
  if (angle < 90) answer = "예각"
  else if (angle == 90) answer ='직각'
  else if ( angle > 90 && angle < 180) answer ='둔각'
  else if ( angle == 180) answer ='평각'


  console.log(answer)
}

solution(angle)


// 너무 충격적이었다. 틀린 부분이 없는데 왜 자꾸 안나오나 했더니
// ' = ' 하나는 값을 할당하는 연산자 였다.
// 당연한 걸, 너무 당연해서 아무렇지 않게 쓰고 있었다.
// 앗!!!!!!!!!!!!!!!!!!!!!!!!!!!
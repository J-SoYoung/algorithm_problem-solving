// 2016년
// 2016년의 a월 b일이 무슨요일인지 리턴하는 함수 완성
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

let a = 5;
let b = 24;

function solution(a, b) {
  var answer = "";
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016-${a}-${b}`).getDay();

  return (answer = week[day]);
}

solution(a, b);

// day를 출력하면 2016-05-23T15:00:00.000Z가 나온다.
// https://yozm.wishket.com/magazine/detail/1695/ 이것은 9시간의 시간차 (UTC기준) 때문에 그리 보이게됨
// 시간을 정확히 표현한다는 건 쉽지 않군. 내가 원하는 날짜가 나오지 않는 이유를 알았으니 됐다.
// data객체를 사용할 때는 한번 더 생각해 봐야 하는 문제인 것 같다.

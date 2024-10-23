let star = 5;
let s = "";

// function solution(star){

//   let s = '';
//   for (let i=0; i<=star; i++){
//     console.log(`${i}번`)
//     for (let a=star; a>i; a --){
//       s += ' '
//     }
//     for (let b=0; b<(2*i-1); b++){
//       s += '*'
//     }
//     s+= '\n'
//   }
//   console.log(s)
// }
// solution(star)

function solution(star) {
  // 줄 구하기
  for (let i = 0; i < star; i++) {
    console.log(`${i}번`);

    // 공백넣기
    for (let a = star; a > i; a--) {
      s += "-";
    }
    // 별 넣기
    for (let b = 0; b < 2 * i - 1; b++) {
      s += "*";
      console.log(s);
    }
    //쭉 이어지니까 줄바꿈 넣기
    s += "\n";
  }
}
solution(star);

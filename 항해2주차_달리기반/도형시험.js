
// let star= 6;
// let s = ''

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


let star= 6;

function solution(star){

  let s = '';
  // 줄 구하기
  for (let i=0; i<=star; i++){
    console.log(`${i}번`)
    // 공백넣기 
    for (let a=star; a>i; a --){
      // console.log(i)
      s += '-'
      console.log(s)
    }
    // 별 넣기
    for (let b=0; b<(2*i-1); b++){
      s += '*'
    }
    //쭉 이어지니까 줄바꿈 넣기
    s+= '\n'  
  }
  // console.log(s)
}
solution(star)

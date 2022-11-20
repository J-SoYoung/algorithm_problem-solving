
// let s = ''
// for (let i=0; i<5; i++){
//   // console.log('😁')
//   for(let j=0; j<i; j++){
//     s += '😍'
//     console.log(s)
//   }
// }


let s = '';
for (let i=0; i<10; i++){
  console.log(`${i}번`)
  for (let a=0; a<i; a++){
    s += ' '
  }
  for (let j=10; j>(2*i)-1; j--){
    s += '*'
  }
  s += '\n'
    console.log(s)
}

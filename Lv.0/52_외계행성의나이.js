let age = 23;


function solution(age) {
  const alphabetsArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
  
  var answer = '';
  for (let i =0; i<age.toString().length; i++ ){
    answer += alphabetsArr[age.toString()[i]]
  }
  console.log(answer)
  return answer;
}

solution(age);

// age의 number형을 string형으로 변환한다. Number.toString()
// 해당 인덱스에 맞는 alphabets으로 바꾸ㅓ준다!


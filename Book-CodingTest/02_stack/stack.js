/** 스택에 필요한 구현
 * stack = []
 * 스택에 데이터를 넣고 push 빼는 pop 함수가 있어야하고
 * 스택이 꽉 찼는지 비어있는지 확인 isFull isEmpty
 */

const stack = [];
const maxSize = 10;

function isFull(stack) {
  return stack.length === maxSize;
}

function isEmpty(stack) {
  return stack.length === 0;
}

function push(stack, item) {
  if(stack.length >= maxSize){
    console.log('스택이 가득 찼습니다. 데이터 추가를 못했습니다')
    return stack
  }else {
    return stack.push(item);
  }
}

function pop(stack) {
  if(stack.isEmpty(stack)){
    console.log('스택이 비어있습니다')
    return 
  }else {
    return stack.pop();
  }
}

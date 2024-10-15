class Stack {
  arr = []; // 내부 데이터 저장소역할

  // 각각의 메서드를 정의해 스택의 동작을 나타낸다
  push(value) {
    return this.arr.push(value);
  }
  pop() {
    return this.arr.pop();
  }
  top() {
    return this.arr.at(-1);
  }

  // 게터를 사용해 프로퍼티처럼 사용할 수 있는 length를 반환한다.
  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(4);
stack.push(7);
stack.push(8); // push => 개수반환
stack.length; // 5
stack.pop(); // 뺀 숫자 반환 8
console.log(stack.top()); // 맨 위 숫자 반환 7


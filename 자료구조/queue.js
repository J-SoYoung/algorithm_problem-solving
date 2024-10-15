class Queue {
  arr = []; // 내부 데이터 저장소역할

  // 각각의 메서드를 정의해 스택의 동작을 나타낸다
  enqueue(value) {
    return this.arr.push(value);
  }
  dequeue() {
    return this.arr.shift();
  }
  lastNum() {
    return this.arr.at(-1);
  }
  firstNum() {
    return this.arr.at(0);
  }
  // 게터를 사용해 프로퍼티처럼 사용할 수 있는 length를 반환한다.
  get length() {
    return this.arr.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(7);
queue.enqueue(8); // push => 개수반환
queue.length; // 5
// queue.pop(); // undefined typeErrro
queue.dequeue(); // 1 뺀 숫자 반환
console.log(queue); // 맨 위? 숫자 반환 8
console.log(queue.firstNum()); // 맨 첫번째 숫자 반환 3
console.log(queue.lastNum()); // 맨 마지막 숫자 반환 8

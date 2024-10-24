/** shift() 메서드를 사용하지 않고 Queue구현하기
 * front와 rear을 사용하여 배열의 index를 변환해 논리적인 queue를 구현
 * 
 * dequeue를 구현하는 것은 실제로 데이터를 제거하는 것이 아니라 
 * index의 위치만 이동시켜 queue를 구현하게 되는 것임 
 * 실제 메모리에는 데이터가 계속 쌓이게 된다. 
 */

class Queue {
  items = [];
  front = 0;
  rear = 0;

  enqueue(item) {
    // item추가, queue의 마지막 데이터의 인덱스를 늘림
    this.items.push(item);
    this.rear++;
    console.log(
      `enqueue: ${item}, 현재 큐 상태:`,
      this.items.slice(this.front, this.rear)
    );
  }

  dequeue() {
    // shift를 사용하지 않고 front의 인덱스를 뒤로 이동
    const item = this.items[this.front++];
    console.log(
      `dequeue: ${item}, 현재 큐 상태:`,
      this.items.slice(this.front, this.rear)
    );
    return item;
  }

  size() {
    return this.rear - this.front;
  }
}

/** 요세푸스 문제
 * N명의 사람이 원 형태로 서 있습니다. 1부터 N까지 번호표를 갖고 있다.
 * 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다
 *
 *  - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다
 *  - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다
 *
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하라.
 *
 * ////// 풀이 think ///////
 * N의 숫자만큼 queue에 넣는다.
 * K번째가 되도록 이전 사람들을 뒤로 이동시킨다.
 * K번째가 1번에 오면 dequeue를 통해 제거한다.
 * 위의 과정을 반복한다.
 */

const N = 5;
const K = 2;

function solution(N, K) {
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      const moved = queue.dequeue();
      queue.enqueue(moved);
      console.log(`이동된 데이터 : ${moved}`);
    }
    const removed = queue.dequeue();
    console.log(`제거된 데이터 : ${removed}`);
  }
  const lastReminding = queue.dequeue();
  console.log(`마지막 남은 데이터 : ${lastReminding}`);
  return lastReminding;
}

console.log(solution(N, K));

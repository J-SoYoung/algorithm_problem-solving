class Queue {
  items = [];
  front = 0;
  rear = 0;

  enqueue(item) {
    this.items.push(item);
    this.rear++;
    console.log(`Enqueue: ${item} - Queue: [${this.items}]`);
  }

  dequeue() {
    if (this.front === this.rear) {
      console.log("Queue is empty");
      return;
    }
    const item = this.items[this.front];
    this.front++;
    console.log(`Dequeue: ${item} - Queue: [${this.items.slice(this.front)}]`);

    // if (this.front > 10) {
    //   this.items = this.items.slice(this.front);
    //   this.rear - +this.front;
    //   this.front = 0;
    //   console.log(items);
    // }

    return item;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(7);
queue.dequeue();
queue.dequeue();

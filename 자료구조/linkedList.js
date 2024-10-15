class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }

  search(index) {
    return this.#search(index)[1]?.value;
  }

  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // 삭제하고자 하는 대상이 없을 때
    // 아무것도 안해도됨
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const li = new LinkedList();
li.length;
li.add(1);
li.add(2);
li.add(3);
li.add(4);
li.add(5); //
li.add(6); // 6
li.search(3); // 4
li.search(5); // 6
li.search(7); // undefined
li.remove(4);
li.search(4); // 6
li.remove(4);
li.search(4); // undefined
li.remove(4); // undefined
// li.length;
// li.add(1);
// li.add(2);
// li.add(3);
// li.add(4);
// li.add(5); //
// console.log(li.add(6)); // 6
// console.log(li.search(3)); // 4
// console.log(li.search(5)); // 6
// console.log(li.search(7)); // undefined
// li.remove(4);
// console.log("----------"); // ---------
// console.log(li.search(4)); // 6
// li.remove(4);
// console.log(li.search(4)); // undefined
// console.log(li.remove(4)); // undefined

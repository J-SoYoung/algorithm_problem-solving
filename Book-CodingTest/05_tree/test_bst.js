/** Binary Search Tree 문제 //////////////////////////
 * 첫 번째 입력 리스트(lst)로 이진 탐색 트리를 생성합니다.
 * 두 번째 입력 리스트(searchList)에 있는 값들이 해당 트리에 존재하는지 탐색해야 합니다.
 * 결과는 searchList의 각 값이 트리에 존재하면 true, 없으면 false를 배열로 반환합니다.
 */
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentRoot = this.root;
    while (true) {
      if (value < currentRoot.value) {
        if (currentRoot.left === null) {
          currentRoot.left = newNode;
          return;
        }
        currentRoot = currentRoot.left;
      } else {
        if (currentRoot.right === null) {
          currentRoot.right = newNode;
          return;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  search(value) {
    let currentRoot = this.root;
    while (currentRoot !== null) {
      if (value === currentRoot.value) return true;
      currentRoot =
        value < currentRoot.value ? currentRoot.left : currentRoot.right;
    }
    return false;
  }
}

function solution(lst, searchList) {
  const bst = new BinarySearchTree();
  for (const list of lst) {
    bst.insert(list);
  }
  console.log("최종 트리 구조xx:", bst);

  let result = [];
  for (const searchItem of searchList) {
    result.push(bst.search(searchItem));
  }

  return result;
}

const lst1 = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList1 = [1, 2, 5, 6];
console.log(solution(lst1, searchList1)); // [true, true, true, false]

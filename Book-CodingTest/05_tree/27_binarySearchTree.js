class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입 함수
  insert(value) {
    const newNode = new TreeNode(value);
    console.log(`노드 생성: ${newNode.value}`);

    if (this.root === null) {
      this.root = newNode;
      //root가 비어있다면 root에 데이터 추가
      console.log(`루트 노드로 추가됨: ${newNode.value}`);
      return;
    }

    let currentRoot = this.root;
    while (true) {
      if (value < currentRoot.value) {
        if (currentRoot.left === null) {
          currentRoot.left = newNode;
          // root의 left가 되는 순간에 node를 가지게 됨
          console.log(`왼쪽 추가: ${newNode.value} (부모: ${currentRoot.value})`);
          return;
        }
        currentRoot = currentRoot.left; // 현재 node가 root노드가 되면서 하위 node를 추가할 수 있게 됨.
      } else {
        if (currentRoot.right === null) {
          currentRoot.right = newNode;
          console.log(`오른쪽 추가: ${newNode.value} (부모: ${currentRoot.value})`);
          return;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  // 노드 검색 함수
  search(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}

function solution(lst, searchList) {
  const bst = new BinarySearchTree();
  lst.forEach((value) => bst.insert(value));

  console.log("최종 트리 구조:", bst);
  const result = searchList.map((value) => bst.search(value));
  return result;
}

const lst1 = [5, 3, 8, 4, 2, 1, 7, 10];
const searchList1 = [1, 2, 5, 6];
console.log(solution(lst1, searchList1)); // [true, true, true, false]

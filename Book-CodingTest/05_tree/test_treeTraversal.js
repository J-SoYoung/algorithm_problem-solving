/** 이진트리순회 binaryTree Traversal
 * 배열로 표현된 완전 이진 트리가 주어집니다. 
 * 이 배열을 이용해 전위 순회(Preorder Traversal)와 
 * 후위 순회(Postorder Traversal) 결과를 구하세요. 
 * 트리의 각 노드는 숫자로 구성되며, 
 * 루트 노드부터 시작하여 재귀 호출을 이용해 트리를 순회합니다.

 입력조건
 * 1) 트리를 나타내는 배열이 입력으로 주어집니다. 배열은 완전 이진 트리를 표현합니다.
 * 2) 배열의 길이는 1 이상 100 이하이며, 각 요소는 1부터 100 사이의 정수입니다.

출력 조건
 * 1) 전위 순회 결과와 후위 순회 결과를 각각 출력합니다.
 * 2) 각 순회 결과는 숫자 사이에 공백으로 구분하여 출력합니다. 예: 1 2 3
 */

function preorder(nodes, idx) {
  if (idx < nodes.length) {
    // console.log(`Preorder visiting node: ${nodes[idx]} at index: ${idx}`);
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }
  return (ret = "");
}
function postorder(nodes, idx) {
  if (idx < nodes.length) {
    // console.log(`postorder visiting node: ${nodes[idx]} at index: ${idx}`);
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]} `;
    return ret;
  }
  return (ret = "");
}

function solution(nodes) {
  // 전위순회 preorder root-left-right
  // 후위순회 postorder : left-right-root
  return `Preorder: ${preorder(nodes, 0)}, Postorder ${postorder(nodes, 0)} `;
}

console.log(solution([10, 20, 30, 40, 50]));
// Preorder: 10 20 40 50 30 , Postorder: 40 50 20 30 10

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
// Preorder: 1 2 4 5 3 6 7 , Postorder: 4 5 2 6 7 3

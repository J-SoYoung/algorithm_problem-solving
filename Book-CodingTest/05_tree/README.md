### TREE

- 나무를 거꾸로 한 듯한 모양의 자료구조이다
- root를 기준으로 하위 node들은 child라 부른다. 노드와 노드 사이를 이어주는 것은 edge라고 표현을 하며 edge를 기준으로 부모 자식간의 관계가 형성된다. 이때, 자식이 없는 노드를 leaf노드라고 한다.
- Tree는 계층 구조를 가지고 있어, 하나의 자료 뒤에 여러개의 자료가 올 수 있다.
- Tree의 형태는 다양하다.

  - binary tree 이진트리 : 하나의 부모가 두 개의 노드만을 가지는 트리 자료구조
  - bianry search tree
  - full binary tree
  - perfect bianry tree
    ....

### bianry tree

- 이진 트리의 순회 방법은 3가지가 있다
  - preorder / 전위순회 : Root - left - right ( 복사, 트리복구 )
  - inorder / 중위순회 : left - root - right ( 정렬 )
  - postorder / 후위순회 : left - right - root ( 트리삭제, 병합 )

### tree의 장점
- 순차 검색을 하는 것에 비해 시간이 절약된다. binary tree는 검색을 할 때마다 root를 기준으로 크고 작은 값을 기준으로 비교값의 대상이 반씩 줄어들기 때문이다. 
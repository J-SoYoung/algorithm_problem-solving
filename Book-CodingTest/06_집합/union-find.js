class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }
  find(x) {
    if (this.parent[x] !== x) {
      console.log(
        `find(${x}): ${x}의 부모를 찾는 중 - 현재 부모: ${this.parent[x]}`
      );
      ``;
      this.parent[x] = this.find(this.parent[x]); // 경로 압축
      console.log(
        `find(${x}): ${x}의 부모를 ${this.parent[x]}로 설정 - 경로 압축 완료`
      );
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
        // console.log(`union(${x}, ${y}): ${y}의 루트를 ${rootX}로 설정`);
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
        // console.log(`union(${x}, ${y}): ${x}의 루트를 ${rootY}로 설정`);
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1;

        if (rootX !== rootY) {
          if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
            // console.log(`union(${x}, ${y}): ${y}의 루트를 ${rootX}로 설정`);
          } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
            // console.log(`union(${x}, ${y}): ${x}의 루트를 ${rootY}로 설정`);
          } else {
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
            // console.log(`${x},${y}동일-${y}를 ${rootX}설정-${rootX}랭크 증가`);
          }
        }
      }
    }
  }
}

// 사용 예시
const uf = new UnionFind(7);
console.log("초기 상태:", uf.parent); // [0,1,2,3,4,5,6]

// union 연산 수행
uf.union(2, 5);

console.log("중간 상태:", uf.parent); // [0,1,1,1,4,5,6]

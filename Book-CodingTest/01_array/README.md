### 배열이란
배열은 같은 타입의 원소들을 효율적으로 관리할 수 있는 기본 자료형이다

### 배열 연산의 시간 복잡도
1. 배열로 접근하기 : O(1)
배열은 모든 위치에 있는 데이터에 단 한번에 접근할 수 있다

2.  맨 처음, 중간에 삽입하기 : O(N)
배열에서 데이터를 삽입하면, 삽입한 데이터 뒤에 있는 기존 데이터들을 뒤로 한 칸씩 밀어야 하는 연산이 필요하다. 

### 배열을 선택할 때 고려할 점
- 데이터에 자주 접근하거나 읽어야 하는 경우 배열을 사용하면 좋다
- 할당할 수 있는 메모리 크기를 확인해야 한다. 1차원 배열은 10,000,000(1000만)개, 2차원 배열은 3000*3000 크기를 생각
- 데이터 삽입이 많은지 확인해야 한다. 데이터를 자주 삽입하면 시간복잡도가 늘어난다. 

### 배열 추가 메서드
- arr.push()
- arr.concat()
- arr.unshift() // 맨 앞 추가
- arr.splice() // 중간 삽입
- ...스프레드 연산자

### 베열 삭제 메서드
- arr.pop()
- arr.shift()
- arr.splice() // 중간 삭제 

### 고차함수
인수를 함수로 받아서 실행하는 함수이다.
- arr.map(()=>{})
- arr.filter()
- arr.reduce() // 익명함수가 받는 인수가 2개 ( 이전상태, 현재 데이터)

------

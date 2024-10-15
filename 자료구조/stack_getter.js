// 게터(getter)
// 객체의 속성 값을 반환하는 함수로, 
// 클래스 내부에서 특정 속성의 값을 읽을 때 사용됩니다. 
// 일반 함수처럼 호출하지 않고, 속성처럼 접근할 수 있다는 점이 특징입니다.

// 일반 함수처럼 사용하려면
class Stack2 {
  arr = [];
  getLength() {
    return this.arr.length;
  }
}
const stack2 = new Stack2();
console.log(stack.getLength()); // 일반 메서드 호출

// 게터 활용 
class Stack3 {
  arr = [];

  get length() {
    return this.arr.length;
  }
}
const stack3 = new Stack3();
console.log(stack.length); // 속성처럼 접근 가능


// 게터의 주요 의미는:
// 속성처럼 값을 읽을 수 있다: stack.length와 같이 함수 호출 없이도 값을 읽을 수 있습니다.
// 캡슐화: 객체 내부의 데이터를 외부에서 직접 수정하지 않고 안전하게 읽을 수 있도록 돕습니다. 예를 들어, 내부에서 어떤 연산을 수행한 결과를 반환하고 싶을 때 유용합니다.
// 명확성: 값을 읽을 때 함수 호출을 생략하므로 코드가 더 직관적으로 보일 수 있습니다.
// 게터는 get 키워드를 사용해 정의되며, 값의 설정 없이 읽기 전용으로 속성을 제공할 때 주로 사용됩니다.
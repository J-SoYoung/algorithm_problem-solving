/** 
< 주식 가격 > 
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

< 제한사항 >
prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
prices의 길이는 2 이상 100,000 이하입니다.
 */

function solution(prices) {
  var stack = [];
  for (let i = 0; i < prices.length; i++) {
    let period = 0;

    for (let j = i + 1; j < prices.length; j++) {
      period += 1;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    stack.push(period);
  }
  return stack;
}

console.log(solution([1, 2, 3, 2, 3])); //[4, 3, 1, 1, 0]
console.log(solution([5, 4, 3, 2, 1])); //[1, 1, 1, 1, 0]
console.log(solution([1, 2, 3, 4, 5])); //[4, 3, 2, 1, 0]
console.log(solution([3, 3, 3, 3, 3])); //[4, 3, 2, 1, 0]

/**
 * 지금의 풀이는, 시간초과가 많이 나옴.
 * 시간복잡도를 계산해보면 N^2 => 문제 배열의 길이는 10^5 , O(10^10) ㅋㅋㅋㅋ
 * 그러니, 시간이 오버되는 문제 맞음.
 *
 * 테스트케이스가 다 틀림.... 왜지?
 * => 가격이 떨어지는 경우 처리가 미흡. ㅎ,ㅁ.
 */

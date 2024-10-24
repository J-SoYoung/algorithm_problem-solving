/** 요세푸스 문제
 * N명의 사람이 원 형태로 서 있습니다. 1부터 N까지 번호표를 갖고 있다.
 * 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다
 *
 *  - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다
 *  - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다
 *
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하라.
 *
 * ////// 풀이 think ///////
 * N의 숫자만큼 queue에 넣는다.
 * K번째가 되도록 이전 사람들을 뒤로 이동시킨다.
 * K번째가 1번에 오면 dequeue를 통해 제거한다.
 * 위의 과정을 반복한다.
 */
const N = 5;
const K = 2;

function solution(N, K) {
  const queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    // K-1번째 데이터를 뒤로
    for (let i = 0; i < K - 1; i++) {
      const moved = queue.shift();
      queue.push(moved);
      console.log("이동데이터--", moved, "현재 queue--", queue);
    }
    const removed = queue.shift(); // 배열에 변수를 삭제한 뒤 변수에 삭제한 데이터 할당
    console.log("삭제데이터--", removed);
  }
  console.log("남은 queue--", queue);
  return queue[0];
}

console.log(solution(N, K));

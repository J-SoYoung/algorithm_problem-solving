/**
 * notion : https://www.notion.so/fun-blog/151792d66a3580d8945de51407c2059b
 * programmers : https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(s) {
  let zeroCount = 0;
  let binaryCount = 0;

  while (s !== "1") {
    zeroCount += s.split("0").length - 1;
    binaryCount += 1;

    s = s.replaceAll("0", "");
    s = s.length.toString(2);
  }

  return [binaryCount, zeroCount];
}

## 문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
- <br>

**제한 사항**<br>
- signs의 길이는 absolutes의 길이와 같습니다.
- signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.<br>
<br>

## 계획
- sign의 T/F에 따라서 1과 -1을 곱한 수를 더한다<br>
```(4*1)+(7*(-1))+(12*1)```<br>
- signs와 absolutes의 배열의 길이는 같으므로 idx를 공유할 수 있다. <br>
- map을 돌려서 signs의 요소를 하나씩 출력해서<br> 
  signs가 T면 absolutes를 출력하고, F면 (* -1)을 해준다.<br>  
- 결과값이 맞으면 answer변수에 값을 더해서 넣는다<br>
<br>

## url
https://school.programmers.co.kr/learn/courses/30/lessons/76501
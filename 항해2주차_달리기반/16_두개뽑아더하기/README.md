## 문제
**내용**<br>
- 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. <br>
**제한 사항**<br>
- numbers의 길이는 2 이상 100 이하, 모든 수는 0 이상 100 이하입니다.<br>
- **놓친 부분!!** 입출력 예를 보면, <br>
두 수를 더한 결과값이 같으면 하나만 출력하도록 되어있다. -> 중복은 안되도록 설정  <br>

## 계획(생각의흐름...ㅋ) 22.11.21
- 인덱스에 있는 수 랜덤하게 2개뽑기. <br>
> Math.random() => 0-1미만, 나는 number배열안에서 랜덤. 범위는 어떻게? 0-num.length??<br>
> 인덱스써서 숫자 출력해보기<br>
> let a = Math.floor(Math.random()*(numbers.length))<br>
- 2개 뽑아서 더하기<br> 
> 겹치지 않고 2개를 어떻게 뽑아? <br>
- 결과값 오름차순 정렬 (배열생성)<br>
결국 30분 이후에 서치를 하기 시작했다. random()에 집중한나머지.. <br>너무 어렵게 생각했나봄ㅋㅋㅋㅋㅋ<br>





<br>

## Think
-

<br>

## url
https://school.programmers.co.kr/learn/courses/30/lessons/68644
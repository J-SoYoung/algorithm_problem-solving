let arr = [1,1,3,3,0,1,1]	
// let arr =[4,4,4,3,3]	

function solution(arr)
  {
    var answer = [];
    // // filter
    //  arr.filter((item, idx, arr)=>{
    //  현재item이랑 다음item이랑 비교해서 같으면 출력하지마.
    //                                     같지 않으면 출력해라. ㅇㅇㅇ
    // 내가 생각 못했던 부분, item idx는 했는데 바깥 arr를 filter로 가져올 생각을 안함 filter의 매개변수로 출력되는 item,idx,arr만 가지고 해결하려했음 -> 비교대상은 밖에서 가져와도 된다는 사실!!ㅋㅋㅋ -> ㅇㅋ

    answer =  arr.filter((item,idx)=>{ return item != arr[idx+1]})
    console.log(answer)
    return answer;
  }

solution(arr)

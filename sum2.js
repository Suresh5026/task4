(function sumOfArray(){
    let arr = [10,20,30,40,50,60,70,80,90,100];
    let sum = 0;
    for(let ind in arr){
        sum += arr[ind];
    }
    console.log(sum);
})();
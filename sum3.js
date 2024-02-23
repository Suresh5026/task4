let sum = (arr) => {
    let sum=0;
    for(let ind in arr){
        sum += arr[ind];
    }
    console.log(sum);
}

sum([1,2,3,4,5,5]);
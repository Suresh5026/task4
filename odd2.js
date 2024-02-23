(function(){
    let arr = [1,2,3,4,5,6,7]
    for(let ind in arr){
        if(arr[ind]%2 != 0){
            console.log(arr[ind]);
        }
    }
})()
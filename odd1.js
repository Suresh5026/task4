let arr=[1,2,3,4,5,6,7,8]
const odd = function(arr){
   for(let i in arr){
     if(arr[i]%2 != 0){
        console.log(arr[i]);
     }
   }
}
odd(arr);
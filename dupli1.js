let arr = [1,2,2,3,3,3,4,4,7,7,9,9,10,15,15,27]

const removeDuplicates = function(arr){
    let unique = [];
    for(let i=0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates(arr));
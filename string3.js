let titleCaps = (arr) =>{
    for(let ind in arr){
        arr[ind] = arr[ind].charAt(0).toUpperCase()+arr[ind].slice(1);
   }    
   console.log(arr);
}

titleCaps(['apple','orange','mango']);
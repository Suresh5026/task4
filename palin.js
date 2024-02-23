const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalidrome = str =>{
    const str1 = String(str);
    let i=0;
    let j=str.length -1;
    while(i<j){
        if(str[i] === str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};

const findPalindrome = arr =>{
    return arr.filter(str => isPalidrome(str));
};
console.log(findPalindrome(arr));
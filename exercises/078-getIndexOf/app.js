// Write your function here
function getIndexOf (p,strin) {
    for( let i =0; i < strin.length;i++) {
        if (strin[i] == p){
            return i;
        }
    }
    return -1
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2



const input = [2,4,7, 11,15,16];
const evenNum =[];
const oddNum = [];

oddEven(input);

function oddEven (x) {
for (y=0; y<x.length; y++){
    if (x[y]%2==0){
        evenNum.push(x[y])
    }
    else{
        oddNum.push(x[y])
    }
}
console.log(`Even numbers: ${evenNum}`);
console.log(`Odd numbers: ${oddNum}`);
}

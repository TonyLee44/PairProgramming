// Create a function that takes in an Array of numbers 
// example: let nums = [1,2,3,4,5,6,7]
// Inside the function do a for loop on the passed in array
// Inside the for loop have a condition that checks to see if the number 5 exists in the array and console log it if it does.
// Finally call that function with the passed in array.

/*let nums = [1,2,3,4,5,6,7];

fivey(nums);

function fivey (arr){

    for (i=0; i<arr.length-1; i++)
    {
        if (arr[i]===5)
        {
        console.log("You have a 5 here!")
        }
        else
        { v=arr.slice(i, i+1)
            
    }

}}*/

function remain (a, b){
   var arr=[];

    var arr1=[];
    var narr1=[];
    for (c=1; c<=a; c++)
    {
        if (a%c===0)
        {
            arr1.push(c);
        }
        else
        {
            narr1.push(c);
        }
    }

    var arr2=[];
    var narr2=[];
    for (c=1; c<=b; c++)
    {
        if (b%c===0)
        {
            arr2.push(c);
        }
        else
        {
            narr2.push(c);
        }
    }
    console.log(arr1);
    console.log(arr2); 
    
    arr=arr1.concat(arr2);
    arr.sort(function(a, b){return(b-a)});

    console.log(arr);
    let d=1;

    for(c=0; arr[c]!=arr[c+1]; c++)
    {
        d=arr[c+1];         
    }
    console.log(`The greatest common divisor between these two numbers is ${d}`);
    alert(`The greatest common divisor between these two numbers is ${d}`);
}

let a=window.prompt("Please type in a whole number");
    while(isNaN(a)===true || Number.isInteger(parseFloat(a))===false)
    {
        a=window.prompt("Error! You did not type in a whole number! Please Try again")
    }

let b=window.prompt("Please type in another whole number");
    while(isNaN(b)===true || Number.isInteger(parseFloat(b))===false)
    {
        b=window.prompt("Error! You did not type in a whole number! Please Try again")
    }

remain(a,b);
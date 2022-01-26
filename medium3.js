// Create a function that takes in an Array of numbers 
// example: let nums = [1,2,3,4,5,6,7]
// Inside the function do a for loop on the passed in array
// Inside the for loop have a condition that checks to see if the number 5 exists in the array and console log it if it does.
// Finally call that function with the passed in array.

let nums = [1,2,3,4,5,6,7];

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

}}
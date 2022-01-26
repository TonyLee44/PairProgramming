/*const prime = [];
const input =[27, 49, 113, 96, 51, 79, 118, 007] //[112, 4, 62, 138, 90, 10, 12, 13]

console.log("New Attempt")



function isItPrime (x) {
    for(i=0; i<x.length; i++)
    {
        if (x[i]%2===0)
        {
            x.splice(i, 1);
            i=-1;
            console.log(x);
        }


    }

        console.log(x);
    }

isItPrime(input);*/
const input = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
const prime = [];

function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  function primeNum (array) {
    for (i = 0; i < array.length; i++) {
        const isPrime = checkPrime(array[i]);
        if(isPrime) {
            prime.push(array[i]);
        }
    }
  }

primeNum(input);
console.log(prime);

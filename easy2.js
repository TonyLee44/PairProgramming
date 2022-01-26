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
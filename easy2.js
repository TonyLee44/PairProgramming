const prime = [];
const notPrime=[];
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function isItPrime (x) {
    var z=2;

    for (y=0; y<x.length; y++){

           /* if (x[y]%2==0 && x[y]!=2){
                notPrime.push(x[y])
               
            }
            else if (x[y]%z==0){
                notPrime.push(x[y])
            }
            else{
                z++
            }
        }*/

  console.log(notPrime);
  console.log(prime);
}

isItPrime(input);

}
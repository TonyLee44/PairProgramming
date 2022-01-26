const str = 'So dark the con of man';

const str2= "Madonna of the Rocks!";

 
  


function backer(str, str2){
    
    var str3=[];
    var str4=[];
    //const arr=[];
    
    str=str.replace(/\W|_/g, '');
    str2=str2.replace(/\W|_/g, '');

for (i=str.length-1; i>=0; i--){
    str=str.toLowerCase();
    let x= str.charAt(i); 
    
    str4.push(x);
    str4.sort();
    }

 for (i=str2.length-1; i>=0; i--){
    str2=str2.toLowerCase();
    let y= str2.charAt(i); 
    
    str3.push(y);
    str3.sort();
 }

//var anagram=str3==str4;

let z=false

return z;
}

console.log(backer(str, str2));


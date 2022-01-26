/*const str = 'Thin man ran; makes a large stride; left planet, pins flag on moon! On to Mars!';

const str2= "'That's one small step for man, one giant leap for mankind.' -- Neil A. Armstrong"*/
 
const str = window.prompt("Type you're first phrase");
const str2= window.prompt("Type your second phrase");


function backer(str, str2){
    
    var str3=[];
    var str4=[];
    
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

let z=false;

if (str3.toString()===str4.toString())
{
   z=true 
  alert("Congrats, the phrases you typed are anagrams!")
}
else
{
    z=false 
    alert("Looks like the phrases you typed aren't anagrams.")
}

return z;

}

console.log(backer(str, str2));


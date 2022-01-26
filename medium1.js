var v=window.prompt("Please type in a single character")

while (v.length>1){
var v=window.prompt("ERROR! Please type in only one character!")
}

function vowelChecker (v){
    v=v.toLowerCase();

    if (v==="a" || v==="e" || v==="i") {
        console.log("This is a vowel")
    }
    else if (v==="o" || v==="u"){
        console.log("This is a vowel")
    }
    else{
        console.log("This is not a vowel")
    }
}

vowelChecker(v);
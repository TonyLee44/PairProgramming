let brackcheck=false;

function brack (strA)
{
    let strB=strA[0]+strA[strA.length-1]

    if(strB==="()" || strB==="{}" || strB==="[]")
    {
        brackcheck=true;
        alert("Good Job! Your phrase is well nested.")
    }
    else
    {
        brackcheck=false;
        alert("Oof! Your phrase is improperly nested.")
    }

    return brackcheck;
}

strA=window.prompt("Type in a bracketed phrase! And we will check if the phrase is appropriately nested!")

console.log(brack(strA));
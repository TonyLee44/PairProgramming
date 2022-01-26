class Car  
{
 constructor (Color, Year, Make, Model, Mileage)
 {   
     this.color=Color;
     this.year=Year;
     this.make=Make;
     this.model=Model;
     this.mileage=Mileage;
 }

 driveToWork()
 {
     this.mileage+=33;
     console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the mileage: Old mileage: ${this.mileage-33} | New mileage: ${this.mileage}`)
     return this.mileage;
 }

 driveAroundTheWorld()
 {
    this.mileage+= 24000;
    console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the mileage: Old mileage: ${this.mileage-24000} | New mileage: ${this.mileage}`)
    return this.mileage;
 }
 
runErrands()
{
    this.mileage+= 30;
    console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the mileage: Old mileage: ${this.mileage-30} | New mileage: ${this.mileage}`)
    return this.mileage;
}

}

let color=window.prompt("Please type in your car's color.");

let year=window.prompt("Please type in your car's year.");
    while(isNaN(year)===true || Number.isInteger(parseFloat(year))===false || year.length!=4)
        {
            year=window.prompt("Error! You did not type in a valid year! Please Try again")
        }

let make=window.prompt("Please type in your car's make.");

let model=window.prompt("Please type in your car's model.");

let mileage=parseFloat(window.prompt("Please type in your car's mileage"));
    while(isNaN(mileage)===true)
    {
        mileage=window.prompt("Error! You did not type in a valid number! Please Try again")
    }

var car=new Car(color,year, make, model, mileage);

car.runErrands();
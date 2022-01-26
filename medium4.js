class Car  
{
 constructor (Color, Year, Make, Model, Milage)
 {   
     this.color=Color;
     this.year=Year;
     this.make=Make;
     this.model=Model;
     this.milage=Milage;
 }

 driveToWork()
 {
     this.milage+=33;
     console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the milage: Old mileage: ${this.milage-33} | New mileage: ${this.milage}`)
     return this.milage;
 }

 driveAroundTheWorld()
 {
    this.milage+= 24000;
    console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the milage: Old mileage: ${this.milage-24000} | New mileage: ${this.milage}`)
    return this.milage;
 }
 
runErrands()
{
    this.milage+= 30;
    console.log(`Your car is a ${this.color} ${this.year} ${this.make} ${this.model}. Here is the milage: Old mileage: ${this.milage-30} | New mileage: ${this.milage}`)
    return this.milage;
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

let milage=parseFloat(window.prompt("Please type in your car's milage"));
    while(isNaN(milage)===true)
    {
        milage=window.prompt("Error! You did not type in a valid number! Please Try again")
    }

var car=new Car(color,year, make, model, milage);

car.runErrands();
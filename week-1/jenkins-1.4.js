/*============================================; 
Title: Assignment 1.4; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using Duck Typing A.K.A. Interfaces 
;===========================================*/

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 1.4"));
console.log ('\n');

// Creates a function that will call the value for car 
function Car(model){

    this.model = model;
}

// creates the values for jeep to be called later
Car.prototype.start = function(){
    
    console.log("Car added to the racetrack");

};

// creates the values for truck to be called later
function Truck (model, year){

    this.model = model;
    this.year = year;

}

// creates the values for jeep to be called later
Truck.prototype.start = function(){

    console.log("Truck added to the racetrack");

};

// creates the values for jeep to be called later
function Jeep (model, year, color){

    this.model = model;
    this.year = year;
    this.color = color;

}

// prototype calls out the values at once
Jeep.prototype.start = function(){

    console.log("Jeep added to the racetrack");

};

// will create the way to push the message out 
var racetrack = []
function driverIt(vehicle) {
    vehicle.start();

    racetrack.push(vehicle);
}

// creates the names of the values that was created earlier
var Impreza = new Car("Impreza");
var Ram = new Truck("Dodge Ram, 2020");
var Wrangler = new Jeep("Wrangler, 2017, Blue");

console.log("");
// drive function will display the vehicle name and output results.
driverIt(Impreza);
driverIt(Ram);
driverIt(Wrangler);

console.log("\n---The following vehicles have been added to the track---");

// creates a loop that will output the name of the cars
for (var x = 0;x < racetrack.length; x++){
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model)
}
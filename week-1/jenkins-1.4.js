/*============================================; 
Title: Assignment 1.4; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using a function to write onto a browser 
;===========================================*/

function Car(model){

    this.model = model;
}

Car.prototype.start = function(){

    console.log("Car added to the racetrack");

};

function Truck (model, year){

    this.model = model;
    this.year = year;

}

Truck.prototype.start = function(){

    console.log("Truck added to the racetrack");

};

function Jeep (model, year, color){

    this.model = model;
    this.year = year;
    this.color = color;

}

Jeep.prototype.start = function(){

    console.log("Jeep added to the racetrack");

};

var racetrack = []

function driverIt(vehicle) {
    vehicle.start();

    racetrack.push(vehicle);
}

var Impreza = new Car("Impreza");
var Ram = new Truck("Dodge Ram, 2020");
var Wrangler = new Jeep("Wrangler, 2017, Blue");

console.log("");

driverIt(Impreza);
driverIt(Ram);
driverIt(Wrangler);

console.log("\n---The following vehicles have been added to the track---");

for (var x = 0;x < racetrack.length; x++){
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model)
}
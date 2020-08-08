/*============================================; 
Title: Assignment 1.3; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using functions and objects
;===========================================*/

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 1.3"));
console.log ('\n');

// function creates 3 values that will displayed later
function cellPhone(manufacturer, model, color, price) {

this.manufacturer = manufacturer;
this.model = model;
this.color = color;
this.price = price;

// function will return the price 
this.getPrice = function() {
   return this.price;
};

// function will return the model
this.getModel = function() {
    return this.model;
 };

// geDetails calls a function that will display a message that calls out the create this. values and created functions for the price and model.
this.getDetails = function() {

return "Manufacturer: " +  this.manufacturer + "\n" + "Model: " + this.getModel() + "\n" + "Color: " + this.color + "\n" +  "Price: " + this.getPrice();

};

};

// Var is created so that you can give the information to the created values that were made.
var phone = new cellPhone("Apple", "IPhone S", "Rose Gold", "$999.99" );

console.log(phone.getDetails());
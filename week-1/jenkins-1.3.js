/*============================================; 
Title: Assignment 1.3; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using a function to write onto a browser 
;===========================================*/

function cellPhone(manufacturer, model, color, price) {

this.manufacturer = manufacturer;
this.model = model;
this.color = color;
this.price = price;

this.getPrice = function() {
   return this.price;
};

this.getModel = function() {
    return this.model;
 };

this.getDetails = function() {

return "Manufacturer: " +  this.manufacturer + "\n" + "Model: " + this.getModel() + "\n" + "Color: " + this.color + "\n" +  "Price: " + this.getPrice();

};

};

var phone = new cellPhone("Apple", "IPhone S", "Rose Gold", "$999.99" );

console.log(phone.getDetails());
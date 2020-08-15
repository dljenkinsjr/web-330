/*============================================; 
Title: Assignment 2.2; 
Author: Professor Krasso ; 
Date: 15 August 2020; 
Modified By: Douglas Jenkins; 
Description: using object create function
;===========================================*/

//Header
var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 2.2"));
console.log ('\n');


// var person is created so it can return the age value
var person = {

    getAge: function(){

        return this.age

    }

};

// the var is used so that you can return the age that was created and give it two values.
var name = Object.create(person, {
        "age":
        {
            "value": "36"
        },
        "fullName":
        {
            "value": "Chris Paul"
        }

});

// calls the created values from the Object.create
console.log("The person's full name is  " + name.fullName);
console.log("The person's age is " + name.getAge());
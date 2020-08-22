/*============================================; 
Title: Assignment 3.3; 
Author: Professor Krasso ; 
Date: 22 August 2020; 
Modified By: Douglas Jenkins; 
Description: Singleton Test
;===========================================*/

var header = require('../jenkins-header');
console.log(header.display("Douglas", "Jenkins", "Exercise 3.3"));
console.log ('\n');

// creates a database

var DatabaseSingleton = (function() {
    var instance;
     function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
        return {
    //creates getInstance that will return true
    getInstance: function() {
        if (!instance) {
        instance = createInstance();
    }
        return instance;
        }
    }
})();

// creates a var that whill call the DatabaseSingleton.getInstance(); on oracle and postgres and post if they are equal to each other

function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    
    console.log("Same database instance? %s ", oracle === postgres);
}

databaseSingletonTest();

// end program

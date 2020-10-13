/*
    Pomodoro.js
    A pomodoro clock written in Js, to be executed using nodeJs
    Author: Perry Fardella
*/

// Initialise a readline interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Initialise a variable to store the pomodoro time
var time;

function getTimeFromUser() {
    readline.question('How long would you like to set the pomodoro for? (in minutes)\n', inputTime => {
        if (isNaN(inputTime)) {
            console.log("You did not enter a number, try again.");
            getTimeFromUser();
        } else {
            time = inputTime;
        }
        readline.close();
      });
}

getTimeFromUser();
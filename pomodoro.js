/*
    Pomodoro.js
    A pomodoro clock written in Js, to be executed using nodeJs
    Author: Perry Fardella
*/

const { exit } = require('process');
const readline = require('readline');

var time;

//Function that allows user input and will wait for the input from the user
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function getInput() {
    do {
        time = await askQuestion("How many minutes would you like the pomodoro to be on for?\n");
        if(isNaN(time)) {
            console.log("You did not enter a number, try again.\n");
        } else {
            console.log("The timer starts now, " + time + " minutes remaining.");
        }
    } while (isNaN(time))
}

function setPomodoro() {
    setTimeout(function() {   
        console.log(time + " minutes completed! good job!");
        process.exit(0);  
        }, (time * 60000));  
}

function showCountdown() {
    var minutesPassed = 1;
    setInterval(function() {
        if (time-minutesPassed !== 0) {
            console.log((time - minutesPassed) + " minute(s) remaining.");
            minutesPassed++;
        }
    }, 60000)
}

async function main() {
    await getInput();
    setPomodoro();
    showCountdown();
}

main();



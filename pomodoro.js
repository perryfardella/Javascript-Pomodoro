/*
    Pomodoro.js
    A pomodoro clock written in Js, to be executed using nodeJs
    Author: Perry Fardella
*/

const readline = require('readline');

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
            console.log("The pomodoro will be on for " + time + " minutes.");
        }
    } while (isNaN(time))
}

getInput();


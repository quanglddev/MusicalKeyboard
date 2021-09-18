"use strict";

var fs = require('fs');
const annyang = require('annyang');

var allSoundFiles;

var calculateStats = function (month) {
    document.getElementById('lol').innerHTML = ('Statistics for ' + month);
    console.log(month)
}

function setup() {
    console.log("asdfa")
    fs.readdir("sounds", function (err, fileNames) {
        if (err) { return }
        else {
            console.log(fileNames)
            allSoundFiles = fileNames
        }
    })
    if (annyang) {
        // Turn on debug messages
      annyang.debug();
        // Add our commands to annyang
        var commands = {
            // A named variable is a one word variable, that can fit anywhere in your command.
            // e.g. saying "calculate October stats" will call calculateStats('October');
            'calculate :month stats': calculateStats,
            'hello': function() {
                console.log('world');
              }
        };

        annyang.addCommands(commands);
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
        console.log("RUNING")
    }
}

document.addEventListener("keypress", function (event) {
    console.log(event.keyCode)

    const randomIndex = Math.floor((Math.random() * allSoundFiles.length));

    var audio = new Audio('sounds/' + allSoundFiles[randomIndex]);
    audio.play();
})

document.addEventListener("click", function () {
    console.log("Mouse clicked")
});

setup()
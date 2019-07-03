//jQuery function

//Undeclared global math formula_generate numbers between 19-120
var random

// Global Vars for setting the 1-12 value for each jewel/crystal
var moonCrystal 
var princessCrystal 
var starCrystal 
var cosmicCrystal 

// Empty Variables
var totalScore = 0;
var wins = 0;
var losses = 0;

// Resets game
function reset () {
    random=Math.floor(Math.random()*101+19);

// Generating a random number for the Crystal Random Number in html
$('#randomNumber').text("Crystal Random Number: " + random);
    console.log(random)

 moonCrystal = Math.floor(Math.random()*12+1)
 princessCrystal = Math.floor(Math.random()*12+1)
 starCrystal = Math.floor(Math.random()*12+1)
 cosmicCrystal = Math.floor(Math.random()*12+1)

console.log("moonCrystal " + moonCrystal)
console.log("princessCrystal " + princessCrystal)
console.log("starCrystal " + starCrystal)
console.log("cosmicCrystal " + cosmicCrystal)

}

reset ();
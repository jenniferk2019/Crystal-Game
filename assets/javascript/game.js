//jQuery function

//Undeclared global math formula_generate numbers between 19-120
var random;

// Global Vars for setting the 1-12 value for each jewel/crystal
var moonCrystal;
var princessCrystal;
var starCrystal;
var cosmicCrystal;

// Empty Variables
var totalScore = 0;
var win = 0;
var losses = 0;

// Resets game
function reset() {
  random = Math.floor(Math.random() * 101 + 19);

 totalScore=0;

 $("#totalScore").text(" Your Total Score: " + totalScore);

  // Generating a random number for the Crystal Random Number in html
  $('#randomNumber').text("Crystal Random Number: " + random);
  console.log(random);

  moonCrystal = Math.floor(Math.random() * 12 + 1);
  princessCrystal = Math.floor(Math.random() * 12 + 1);
  starCrystal = Math.floor(Math.random() * 12 + 1);
  cosmicCrystal = Math.floor(Math.random() * 12 + 1);

  console.log("moonCrystal " + moonCrystal);
  console.log("princessCrystal " + princessCrystal);
  console.log("starCrystal " + starCrystal);
  console.log("cosmicCrystal " + cosmicCrystal);

  // Calling attribute in html
  $("#moonCrystal").attr("data-crystalvalue", moonCrystal);
  $("#princessCrystal").attr("data-crystalvalue", princessCrystal);
  $("#starCrystal").attr("data-crystalvalue", starCrystal);
  $("#cosmicCrystal").attr("data-crystalvalue", cosmicCrystal);
}

reset(); // when the game first starts reset

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal").on("click", function () {

  console.log($(this));

  // Using the $(this) keyword specifies I want to tell my html to link the value of my crystal when clicked.
  // Using the .attr("data-crystalvalue") allows my function (coincide with my html) grab the value out of the "data-crystalvalue" attribute.

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  console.log(crystalValue);

  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  totalScore += crystalValue;
  
  $("#totalScore").text(" Your Total Score: " + totalScore);

  // If the total is equal to the Random Number then they win - tally on screen (win increase by one) and then reset game.
  if (totalScore === random) {
    win = win + 1;

    $("#wins").text("Wins: " + win)

    reset ()
  }
  // // else if the total is greater than Random Number then they lose - tally on screen (losses increases by one) and then reset the game.

  else if (totalScore >= random) {
    losses = losses + 1 

    $("#losses").text("Losses: " + losses); 
    
    reset ()
  };

});


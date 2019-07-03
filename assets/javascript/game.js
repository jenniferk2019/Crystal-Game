var wins
var losses


var crystalNumber=Math.floor(Math.random() * 120 +1);
var yourScore=0

function crystalMath () {
    if ($("#moonCrystal").on("click", function() {
        var moonCrystal=Math.floor(Math.random() * 12 +1);
        console.log(moonCrystal)
    })) {
        yourScore = yourScore + moonCrystal;
    } 
    else if ($("#princessCrystal").on("click", function() {
        var princessCrystal=Math.floor(Math.random() * 12 +1);
        console.log(princessCrystal)
    })) {
        yourScore = yourScore + princessCrystal;
    }
    else if ($("#starCrystal").on("click", function() {
        var starCrystal=Math.floor(Math.random() * 12 +1);
        console.log(starCrystal)
    })) {
        yourScore = yourScore + starCrystal;
    }
    else if ($("#cosmicCrystal").on("click", function() {
        var cosmicCrystal=Math.floor(Math.random() * 12 +1);
        console.log(cosmicCrystal)
    })) {
        yourScore = yourScore + cosmicCrystal;
    }document.getElementById('crystalNumber').textContent = crystalNumber;

}
crystalMath()

function random() {
var crystalNumber = Math.floor(Math.random() * 120 + 19);
document.getElementById('crystalNumber').textContent = crystalNumber;
console.log(crystalNumber)
}

random()

var yourScore = 0

//*******************************************************/

// function addToScore(val) {
//     var numberToAdd = parseInt(val);
//     var currentScore = parseInt(yourScore.innerHTML);
//     yourScore.innerHTML = numberToAdd + currentScore;
// }

// *****************************************************/

var moonCrystal = document.getElementById("moonCrystal");
//red.setAttribute("value", "5");
console.log(moonCrystal.value);

var princessCrystal = document.getElementById("princessCrystal");
//red.setAttribute("value", "10");
console.log(princessCrystal.value);

var starCrystal = document.getElementById("starCrystal");
//red.setAttribute("value", "15");
console.log(starCrystal.value);

var cosmicCrystal = document.getElementById("cosmicCrystal");
//red.setAttribute("value", "20");
console.log(cosmicCrystal.value);

//********************************************************/

// add an [event listener] to elements
// jQuery to shorten the below javascript??


// moonCrystal.addEventListener('click', function () {
//     //this refers to Moon Crystal
//     addToScore(this.value);
//     checkPlayerScore();
// });

// princessCrystal.addEventListener('click', function () {
//     // this refers to Princess Crystal
//     addToScore(this.value);
//     checkPlayerScore();
// });

// starCrystal.addEventListener('click', function () {
//     // this refers to Star Crystal
//     addToScore(this.value);
//     checkPlayerScore();
// });

// cosmicCrystal.addEventListener('click', function () {
//     // this refers to Cosmic Crystal
//     addToScore(this.value);
//     checkPlayerScore();
// });

// *********************************************************/

// var sum = parseInt(moonCrystal.value) + parseInt(princessCrystal.value) + parseInt(starCrystal.value) + parseInt(cosmicCrystal.value);
// console.log (sum);

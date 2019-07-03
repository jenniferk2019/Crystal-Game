var yourNumber =
    document.getElementById('yourNumber');
yourScore.innerHTML = 0;

var crystalNumber =
    document.getElementById('crystalNumber');
targetScore.innerHTML = getRandomValue(10); 
// is the ^ getRandomValue properly used?? to generate random numbers by ten??

//*******************************************************/

function addToScore(val) {
    var numberToAdd = parseInt(val);
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
}

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

moonCrystal.addEventListener('click', function () {
    //this refers to Moon Crystal
    addToScore(this.value);
    checkPlayerScore();
});

princessCrystal.addEventListener('click', function () {
    // this refers to Princess Crystal
    addToScore(this.value);
    checkPlayerScore();
});

starCrystal.addEventListener('click', function () {
    // this refers to Star Crystal
    addToScore(this.value);
    checkPlayerScore();
});

cosmicCrystal.addEventListener('click', function () {
    // this refers to Cosmic Crystal
    addToScore(this.value);
    checkPlayerScore();
});

// *********************************************************/

var sum = parseInt(moonCrystal.value) + parseInt(princessCrystal.value) + parseInt(starCrystal.value) + parseInt(cosmicCrystal.value);
console.log (sum);

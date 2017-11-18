console.log("yo");
var xtalsDOM = $('.xtals');
var compNumberDOM = $("#compNum");
var compNum = 0;
var userScoreDOM = $("#userScore");
var userScore = 0;
var winsDOM = $("#wins");
var wins = 0;
var lossesDOM = $("#losses");
var losses = 0;
// var xtalsDOM =document.getElementsByClassName("xtals")
console.log(xtalsDOM);
//see 4 crystals an the screen
    //loop that runs 4 times
    // console.log(0 < 4);
    // console.log(12 < 10);
    // console.log(12 === 12);
    // console.log(14 <= 14);
function getRando(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function generateCrystals () {
    xtalsDOM.empty();
    for(var i = 0; i < 4; i++) {
    //create and image
    var img = $("<img>") //document.createElement("img")
    //add a number between 1-12 to that img
    img.attr("data-crystalValue", getRando(1, 12))
    img.attr("src", "./assets/images/crystal-" + i + ".jpg")
    img.attr("id", "crystal")
    console.log(img);
    //show that img on the screen
        xtalsDOM.append(img)
    };
};
    


//click on of these crystals and have that crystals value shown on the screen
$(".xtals").on("click", "#crystal", function(){
    //grab the crystalVal of the crystal we clicked
    var crystalValue = parseInt($(this).attr("data-crystalValue"));
    console.log(crystalValue);
    //add the val of crystal to users score
    userScore += crystalValue;
    console.log(userScore);
        //update the users score on the screen
        userScoreDOM.html(userScore);
    //my total is eqaul to the random number from computer we win
    if(userScore === compNum){
        //update our wins 
        ++wins //google search ++ before var vs ++ after var js
        //show those on the screen
        winsDOM.html(wins)
        startGame()
    }
    //my total is greater then the random number from computer we loose
    if(userScore > compNum){
        //update our loses 
        ++losses
        //show those on the screen
        lossesDOM.html(losses)
        startGame()
    }
})
        //starts the game
function startGame () {
    userScore = 0;
    userScoreDOM.html(userScore)
    generateCrystals()
    compNum = getRando(19, 120)
    compNumberDOM.html(compNum)
};
startGame()
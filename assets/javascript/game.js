$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()* 40) + 1;
    $("#blackJack").html(randomNumber);

// Declare Global Variable here //
    
var wins = 0;
var losses = 0;
var totalScore = randomNumber;
var yourScore = 0;
// Num 1 is for Red crystal
var num1 = Math.floor(Math.random()*10) + 1;
//$("#clickTotalValue").text(num1);
//Num 2 Is Blue Crystal
var num2 =  Math.floor(Math.random()*10) + 1;
//$("#clickTotalValue").text(num2);
// Num 3 is for Green Crystal
var num3 =  Math.floor(Math.random()*10) + 1;
//$("#clickTotalValue").text(num3);
// Num 4 is for Weird Crystal
var num4 =  Math.floor(Math.random()*10) + 1;
//$("#clickTotalValue").text(num4);

function resetNumber(){
    yourScore = 0;
    randomNumber = Math.floor(Math.random()* 40) + 1;
    $("#blackJack").html(randomNumber);
    num1 =  Math.floor(Math.random()*10) + 1;
    num2 =  Math.floor(Math.random()*10) + 1;
    num3 =  Math.floor(Math.random()*10) + 1;
    num4 =  Math.floor(Math.random()*10) + 1;
}

/*$("#cblocks li").click(function () {
    alert("hello");
});*/
$("#blueCrystal").on("click", function() {
    yourScore = yourScore + num2;
    $("#gameScore").html(yourScore);
    if(randomNumber == yourScore){
        wins++;
        $("#wins").html(wins);
        resetNumber();

    }
    else if (randomNumber<yourScore){
        losses++;
        $("#losses").html(losses);
        resetNumber();
    }

});
$("#redCrystal").on("click", function() {
    yourScore = yourScore + num1;
    $("#gameScore").html(yourScore);
    if(randomNumber == yourScore){
        wins++;
        $("#wins").html(wins);
        resetNumber();

    }
    else if (randomNumber<yourScore){
        losses++;
        $("#losses").html(losses);
        resetNumber();
    }

});
$("#greenCrystal").on("click", function() {
    yourScore = yourScore + num3;
    $("#gameScore").html(yourScore);
    if(randomNumber == yourScore){
        wins++;
        $("#wins").html(wins);
        resetNumber();

    }
    else if (randomNumber<yourScore){
        losses++;
        $("#losses").html(losses);
        resetNumber();
    }

});
$("#wierdCrystal").on("click", function() {
    yourScore = yourScore + num4;
    $("#gameScore").html(yourScore);
    if(randomNumber == yourScore){
        wins++;
        $("#wins").html(wins);
        resetNumber();

    }
    else if (randomNumber<yourScore){
        losses++;
        $("#losses").html(losses);
        resetNumber();
    }

});


});


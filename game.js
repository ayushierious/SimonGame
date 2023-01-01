
var gamePattern=[];

var buttonColours=["red", "blue", "green", "yellow"];
function nextSequence(){
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour=buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
}
$("#randomChosenColour").fadeOut().fadeIn().animate({opacity:0.5});

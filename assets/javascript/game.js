window.onload = function () {
//-----------ID's------------------

//id gameNum = is the number the computer chose 
//id yourNum = is the number you currently have
//id score = the players current score
//class gem = the button for gems


var gameNumber; //is the number the comp chose
var yourNumber; //the number user currently has
var currentScore; // the players current score 
var gem; // buttons for gems
var message; // alerts the user


//----When the game starts------






//----The Game Score-----
gameNumber = document.getElementById("gameNum");
gameNumber.innerHTML = Math.floor((Math.random() * 108) + 12);


//--------Value of Gem Buttons/ User Score--------------

$(".gem1").on("click", function(){
					alert("I was clicked.  1");
});

$(".gem2").on("click", function(){
					alert("I was clicked.  2");
});


$(".gem4").on("click", function(){
        		yourNumber = document.getElementById("yourNum");
        		yourNumber.innerHTML = Math.floor((Math.random() * 99) + 1);


        		if (yourNumber == gameNumber){
						alert("Whoa dog, you won. How did that happen?");
						}

						else {
						alert("You lost. No big deal though, I've only just started this homework. Nothing is really working yet")
						}

			});

$(".gem3").on("click", function(){
					alert("I was clicked.  3");
});

}//closing tag for window.onload

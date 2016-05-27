window.onload = function () {
//-----------ID's------------------

//id gameNum = is the number the computer chose 
//id yourNum = is the number you currently have
//id score = the players current score
//id gemButton = the button for gems


var gameNumber; //is the number the comp chose
var UserScore = 0; //the number user currently has
var currentScore; // the players current score 
var gemNumber = [12, 3, 45, 5]; // buttons for gems
var gemImage = ['assets/images/gem1.jpg', 'assets/images/gem2.jpg', 'assets/images/gem3.jpg', 'assets/images/gem4.jpg']; // buttons for gems
var message; // alerts the user


//----When the game starts------

function newGame(){

	for (var i=0; i< gemNumber.length; i++){
		gemNumber[i] = Math.floor((Math.random() * 22) + 1);
	}

}

newGame();

//----The Game Score-----
gameNumber = Math.floor((Math.random() * 108) + 12);
$("#gameNum").append(gameNumber);




//--------Value of Gem Buttons/ User Score--------------


$(".gem1").on("click", function(){
					alert("I was clicked.");
					});


// populate gems and display them
for (var i=0; i< gemNumber.length; i++){
			var gem2 = $('<img>');
			gem2.attr('data-num', gemNumber[i]);
			gem2.attr('src', gemImage[i]);
			gem2.attr('alt', '');


			// for debugging only
			gem2.attr('title', gemNumber[i]);



			gem2.attr('height', '100px');
			gem2.addClass('gemTwo');

			$('#gemButton').append(gem2);
}



$('.gemTwo').on('click', function(){
	UserScore = UserScore + parseInt($(this).data('num'));
	$('#yourNum').text(UserScore);
});
     


}//closing tag for window.onload

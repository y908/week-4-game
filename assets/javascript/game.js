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
var wins = 0; //keeps score for game
var losses = 0; //keeps score for game

//----When the game starts------

function newGame(){

	//----The Game Score-----
gameNumber = Math.floor((Math.random() * 108) + 12);

// --------change game number-------------
$("#gameNum").empty().append(gameNumber);


 //----------gem number-------------------
	for (var i=0; i< gemNumber.length; i++){
		gemNumber[i] = Math.floor((Math.random() * 9) + 1);
	}

//-----score---------
$("#score").empty().append("Wins: " + wins + "<br>Losses: " + losses);

UserScore = 0;
$("#yourNum").html(UserScore);

}

newGame();


// populate gems and display them
for (var i=0; i< gemNumber.length; i++){
			var gem2 = $('<img>');
			gem2.attr('data-num', gemNumber[i]);
			gem2.attr('src', gemImage[i]);
			gem2.attr('alt', '');
	   	gem2.attr('height', '100px');
			gem2.addClass('gemTwo');

			$('#gemButton').append(gem2);
}

//--------------wins and losses--------------

$('.gemTwo').on('click', function(){
	UserScore = UserScore + parseInt($(this).data('num'));
	$('#yourNum').text(UserScore);


if (UserScore == gameNumber){
	alert('You won!');
	wins++;
	newGame();
}else if (UserScore > gameNumber){
	alert('You lost!');
	losses++;
	newGame();
}

});



}//closing tag for window.onload

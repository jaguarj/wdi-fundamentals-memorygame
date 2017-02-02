console.log("JS file is connected to HTML! Woo!")

/* This is the first updated main.js file from Josh.*/

var cardOne = 'king';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'queen';

//Create var to stor gameBoard.//
var gameBoard = document.getElementById('game-board');






//Create a function that creates the cards for the game.//
function createCards() {
	for (var i=0; i < 4; i++) {		
	var newCard = document.createElement('div');
	newCard.className = 'card';
	gameBoard.appendChild(newCard);
  }
}
//Calling the createCards function to show your cards.//
createCards();



//How do I write the code below without being redundant? or DRY? 

/*
if ( cardTwo === cardFour ) {
	alert("Sorry try again!");
} else if ( cardOne === cardThree ) {
	alert("Sorry try again!");
} else if ( cardTwo === cardThree ) {
	alert("Sorry try again");
} else if ( cardTwo === cardOne ) {
	alert("You found a match!");
} else if ( cardOne === cardFour ) {
	alert("Sorry try again");
} else if ( cardThree === cardFour ) {
	alert("You found a match!");
}

*/























console.log("JS file is connected to HTML! Woo!")

/* This is the first updated main.js file from Josh.*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');


var sayHello = function(x){ 
  var x = prompt("Hello stranger, what is your name? ");    
  var name = x;  
	  if (x === '' || x === null || x === undefined){
	    alert("Really...no input? You can do better! Let's try this again!");    
	  } 	  
  var y = prompt("Would you like to play my game, " + name + '?'); 	  
	  if ( y === "no" || y === "No" || y === '' || y === null ){	    
	    alert("See ya round sucka!");
	    return;	    
	  } if ( y === "yes" || y === "Yes" || y === "sure" || y === "ok"){	    	    
	    alert("Your Memory Game has started!! Hahahaha...good luck!!");   	    	  
	    createBoard();
	  }
}; 

//This function creates a game board with a specified number of cards based off the cards array.//
var createBoard = function(){
		for (var i = 0; i < cards.length; i++){

		//Creates a card element 'div' to be the card or cards depending on the length of the cards array.//	
		var newCard = document.createElement('div');

		//Sets the class 'card' to each div element.//	
		newCard.classList.add('card');

		//This will set the card's 'data-card' to be the element of the array.//
		newCard.setAttribute('data-card', cards[i]);

		//Runs the isTwoCards function when the card is clicked.//
		newCard.addEventListener('click', isTwoCards);
		//Appends card to the game-board.//
		gameBoard.appendChild(newCard);
			

	}
	reset();
};



function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
		//console.log(this.getAttribute('data-card'));//
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='images/king.png' alt='King' />";

		} else {
			this.innerHTML = "<img src='images/queen.jpg' alt='Queen'/>";
		};

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];

	}

};


function isMatch(cards){
	if (cards[0] === cards[1]) {
		alert('You have a match!');
	} else {		
		
		reset();	
	} 
	
};


function reset() {
	for (var i = 0; i <cards.length; i++){
		if(document.getElementsByClassName('card')[i]) {
			document.getElementsByClassName('card')[i].innerHTML = "";
		}
	}
};



	









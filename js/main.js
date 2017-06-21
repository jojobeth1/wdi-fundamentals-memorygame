console.log ("Up and Running!");


// Create Array to store all cards
var cards = ["queen", "queen", "king", "king"];

// Created an array to hold cards in play
var cardsInPlay = [];

// Create a variable cardOne to represent the first card user flipped
var cardOne = cards  [0];

// Add card to array of cards that are in play
cardsInPlay.push (cardOne);

// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardOne);


// Create a variable cardTwo to represent the second card the user flipped
var cardTwo = cards[2];
// Add card to array of cards that are in play
cardsInPlay.push(cardTwo);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardTwo);

// check to see if two cards are in play
if ( cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('Nice! You found a match!');
	} else {
		alert('Yikes. Try again.');
	}
}



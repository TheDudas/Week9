//what is needed?

/**
 * Deck
 * 52 cards (should each card be a class?)
 * should it be an object with 3 values?
 * - Rank?  1, 2, 3, j, q, k
 * - Suit (Heart, spade, club, diamond)
 * - comparisons Set a value to compare to each other. 
 * - a way to shuffle the deck
 * - pass the cards to the players( where? in deck, game logic?)
 *  * 
 * Players (player class? or just put it in game logic?)
 * add Players Names instead of 1 or 2
 * - need a Name?
 * - score totals for each
 * - compare scores
 * - Hand - (whhat they have once they start)
 * 
 * logic to actually play the game..... 
 * Game Class? w/(deck, players, )  We can use aDeck in any card game.
 * we are playing a specific game. 
 * Need a number value on each card. compare the cards....
 * 
 * 
 */
// Deck Class
/**
 * should have :
 * an array to store the cards
 * an array to store all the cards ranks
 * An array to store all the cards Suits (use the index to give them a value)
 * 
 * 
 */
 
// class of Deck has all the cards and rankings for points. 
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ]; 
        this.suits = [
            "Hearts ♥", "Diamonds ♦", "Spades ♠", "Clubs ♣"
        ]; // Deck and suits to match 
    }
    //Method to create the deck ... an iteration. 
    // push a new card into this.deck
createDeck() {   // creates a deck from looping through iterations of the ranks and suits. 
    for (let i = 0; i < this.suits.length; i++) {
        for(let j = 0; j < this.ranks.length; j++) {
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}`,
                value: j + 1
            }
            this.deck.push(card)
           }
      
        }
    }

    shuffleDeck() {    
        for (let i = this.deck.length - 1; i > 0; i--) {  //  runs through as a loop to randomaly select numbers from the Math.random
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        
    }
}

// Class for a game (War Game)
/**
 * Needs:
 * A deck inside of our Game Class
 * - Create, shuffle, and pass the Deck 
 * 
 * Logic to play the game, 
 *  Turn based, How many?
 *  Do players have a hand yet?
 * Control flow statement logic to decide who wins
 * 
 * 
 * - Players  - 2  
 * Need ?  
 * Hand, 
 * score
 * name
 * 
 * 
 */

class Game {
 constructor() {
    this.player1 = {
        name: 'Kristi', // added my wife as Player1 because she always beats everyone at War. 
        score: 0, 
        hand: []
    }
    this.player2 = {
        name: 'John',  //  I don't play very well. 
        score: 0, 
        hand: []
    }
 }
// method to play the game 
//**
// pass out cards to players
// take X amount of turns as long as players have cards, (or the number of cards they have)
// award points based on card.value
// log the winner
//
//
//  */

playGame() {
    //instatiate a new Deck, create a new deck, and shuffle the deck.

    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()
                            //shuffles the deck after creating a new deck. 
                            
    while (deck.deck.length !== 0) {
        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }
//actually playing the game. How many turns are needed? 

for (let i = 0; i < this.player1.hand.length; i++)  {
// conditional logic based on awarding points based on comparing the card values.  
// the below lines tabulate the numbe of times each player wins a hand. Hands are won based on score values being higher than the other players score value
    if (this.player1.hand[i].value > this.player2.hand[i].value)  {
        this.player1.score ++ 
        console.log(` 
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
            ${this.player1.name} wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score} 
            `) // logs player's scores
         } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score ++ // adds result value to current this.player2.score
            console.log(`   
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
            ${this.player2.name} wins a point!  ... But ${this.player1.name} is still the Winner!  
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                    `)  // logs the winner based on score accumulationsfor player2
         } else { // if there is a tie. 
           console.log(` 
            p1 Card: ${this.player1.hand[i].name}
            p2 Card: ${this.player2.hand[i].name}
            Tie:  No Points Awarded.... but ${this.player1.name} is still the winner!
            Current Score: ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}
                   `)
                } // console log of the players hands, tie result, current score.  I made Kristi be the winner all the time so she would be happy.
            }
            if (this.player1.score > this.player2.score) {
                console.log(`${this.player1.name} wins!`)  
            } else if (this.player2.score > this.player1.score) {
                console.log(`${this.player2.name} wins! but Kristi is always the Winner!`)  // Kristi always wins at War. 
            } else { 
                console.log(`It's a tie! ${this.player1.name} Wins by default!`)  // Kristi always wins at War. 

            }
        }
}  


const game = new Game  // New game as game is a Constant
game.playGame()   // starts the game. 





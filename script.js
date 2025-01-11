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
        ];
    }
    //Method to create the deck ... an iteration. 
    // push a new card into this.deck
createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
        for(let j = 0; j < this.ranks.length; j++) {
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}`,
                value: j + 1
            }
            this.deck.push(card)
            console.log(card)
           }
      
        }
    }

}

const deck = new Deck 
deck.createDeck()

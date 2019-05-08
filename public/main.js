// when the page loads, shuffle the deck
// when user clicks the button, display the first card

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

const deck = []

const main = () => {
  console.log('page loaded')

}
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    const rank = ranks[j]
    const suit = suits[i]
    console.log(rank)
    console.log(suit)
    const card = rank + ' ' + suit
    deck.push(card)

  }
  console.log(deck)
}


const dealCard = () => {}
document.querySelector('.draw-btn').addEventListener('click', dealCard)
document.addEventListener('DOMContentLoaded', main)









// for i from n - 1 down to 1 do :
//     j = random integer(where 0 <= j <= i)
//   swap items[i] with items[j]
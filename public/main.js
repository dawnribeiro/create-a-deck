// when the page loads, shuffle the deck
// when user clicks the button, display the first card

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

const deck = []

const main = () => {
  console.log('page loaded')
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < ranks.length; j++) {
      const rank = ranks[j]
      const card = rank + ' ' + suit
      deck.push(card)
    }
  }

  shuffle(deck)
  console.log(deck)
}
const shuffle = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[randomPosition]
    deck[randomPosition] = temp
  }
}

const drawCard = () => {
  document.querySelector('.draw.btn').textContent = '0'

}

document.querySelector('.draw-btn').addEventListener('click', drawCard)
document.addEventListener('DOMContentLoaded', main)
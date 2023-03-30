const diceImageSourceLinks = [
  'dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png',
];
const diceOne = document.querySelector('.img1');
const diceTwo = document.querySelector('.img2');
const firstPlayerP = document.getElementById('player1');
const secondPlayerP = document.getElementById('player2');
const firstPlayerPValue = document.getElementById('player1').innerHTML;
const secondPlayerPValue = document.getElementById('player2').innerHTML;

// console.log(diceImageSourceLinks);
// console.log(diceOne.attributes);
// console.log(diceTwo.getAttribute('src'));
// console.log(firstPlayerP);
// console.log(secondPlayerP);

const randomNumberForPlayer1 = Math.floor(Math.random() * 6);
const randomNumberForPlayer2 = Math.floor(Math.random() * 6);
// console.log(randomNumberForPlayer1);
// console.log(randomNumberForPlayer2);
// console.log(diceImageSourceLinks[randomNumberForPlayer1]);

// Changing the Images Source.
diceOne.setAttribute('src', `images/${diceImageSourceLinks[randomNumberForPlayer1]}`);
diceTwo.setAttribute('src', `images/${diceImageSourceLinks[randomNumberForPlayer2]}`);
// Changing the text to show who won.
if (randomNumberForPlayer1 === randomNumberForPlayer2) {
  firstPlayerP.innerHTML = 'It is a Draw';
  secondPlayerP.innerHTML = 'It is a Draw';
} else if (randomNumberForPlayer1 > randomNumberForPlayer2) {
  console.log('player 1 wins');
  firstPlayerP.innerHTML = `🚩${firstPlayerPValue} wins!`;
} else {
  console.log('player 2 wins');
  secondPlayerP.innerHTML = `${secondPlayerPValue} wins🚩`;
}
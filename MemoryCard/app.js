const cardArray = [
  {
    name: 'penguin',
    img: 'img/1.png',
  },
  {
    name: 'Tree',
    img: 'img/2.png',
  },
  {
    name: 'Polar Bear',
    img: 'img/3.png',
  },
  {
    name: 'Snow',
    img: 'img/4.png',
  },
  {
    name: 'Snowman',
    img: 'img/5.png',
  },
  {
    name: 'Fairy Tale',
    img: 'img/6.png',
  },
  {
    name: 'penguin',
    img: 'img/1.png',
  },
  {
    name: 'Tree',
    img: 'img/2.png',
  },
  {
    name: 'Polar Bear',
    img: 'img/3.png',
  },
  {
    name: 'Snow',
    img: 'img/4.png',
  },
  {
    name: 'Snowman',
    img: 'img/5.png',
  },
  {
    name: 'Fairy Tale',
    img: 'img/6.png',
  },
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)

  }
}
createBoard()


function checkMatch() {
  // console.log(`Check for match`)
  const cards = document.querySelectorAll('img')
  console.log(cards)
  /* if(optionOneId == optionTwoId){
    alert("You've clicked the same image.")
  } */

  if (cardChosen[0] == cardChosen[1]) {
    alert('You found the match!')
    cards[cardChosenIds[0]].setAttribute('src', 'img/check.png')
    cards[cardChosenIds[1]].setAttribute('src', 'img/check.png')
    cards[cardChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardChosenIds[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen)
    
  } else{
    cards[cardChosenIds[0]].setAttribute('src', 'img/blank.png')
    cards[cardChosenIds[1]].setAttribute('src', 'img/blank.png')
  }
  resultDisplay.innerHTML = cardsWon.length
  cardChosen = [];
  cardChosenIds = [];

  if(cardsWon.length == (cardArray.length/2)){
    resultDisplay.innerHTML = 'Congratulations. You found them all!!'
  }
}



function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}



















const computerChoiceDisplay = document.getElementById('computer-choice');
const usersChoiceDisplay = document.getElementById('users-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;



possibleChoices.forEach(possibleChoices=>{
  possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.innerHTML
    usersChoiceDisplay.innerHTML = userChoice
    generateCumputerChoice()
    getResult();
  })
})


function generateCumputerChoice(){
  const randomNumber = Math.floor(Math.random()*3)
  if(randomNumber == 1){
    computerChoice = 'Rock'
  } else if (randomNumber == 2){
    computerChoice = 'Paper'
  } else {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
  let result = userChoice == computerChoice ? `Tie Game` 
            : userChoice == 'Rock' && computerChoice == 'Paper' ? `Computer Wins`
            : userChoice == 'Paper' && computerChoice == 'Scissors' ? `Computer Wins`
            : userChoice == 'Scissors' && computerChoice == 'Rock' ? `Computer Wins`
            : `Player Wins`;
  resultDisplay.innerHTML = result;
  
}
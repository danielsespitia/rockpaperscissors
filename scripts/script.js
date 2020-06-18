const playerInput = "";
const rock = document.querySelector('#rockb')
const paper = document.querySelector('#paperb')
const scissors = document.querySelector('#scissorsb')

function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  let chois = "";

  if (num === 0) {
    chois = "rock";
  } else if (num === 1) {
    chois = "paper";
  } else if (num === 2) {
    chois = "scissors";
  }
  return chois;
}

function playRound(playerSelection, computerSelection){
  let playerScore = 0;
  let computerScore = 0;

console.log("esto es playerselection " + playerSelection)
console.log("esto es computerselection " + computerSelection)
  //playerSelection = playerSelection.toLowerCase();
  console.log("esto es playerselection minus" + playerSelection)

  //computerSelection = computerPlay();
    //console.log("computer selection is " + computerSelection + " and player selection is " + playerSelection);
  let round = "defecto";

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      round = "Tie!";
    } else if (computerSelection == "paper") {
      round = "You Lose! Paper beats Rock";
    } else if (computerSelection == "scissors") {
      round = "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      round = "You Win! Paper beats Rock";
    } else if (computerSelection == "paper") {
      round = "Tie!";
    } else if (computerSelection == "scissors") {
      round = "You Lose! Scissors beat Paper";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
        round = "You Lose! Rock beats Scissors";
      } else if (computerSelection == "paper") {
        round = "You Win! Scissors beat Paper";
      } else if (computerSelection == "scissors") {
        round = "Tie!"
      }
  }
  return round;
}

rock.addEventListener("click", function() {
    console.log("acabe de escoger roca 1");

  let result = playRound("rock",computerPlay()) 
  console.log("resultado "+result);
}
  );
console.log(playRound())

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let result = [];
//   let versus = "";

//   for (let i = 0; result.length < 5; i++) {
//     let winOrLose = playRound().slice(0,9);
//     if (winOrLose == "You Win! ") {
//       playerScore++;
//       result.push(winOrLose);
//     }
//     else if (winOrLose == "You Lose!") {
//       computerScore++;
//       result.push(winOrLose);
//     }
//   console.log(winOrLose)
//   }
//   if (playerScore < computerScore) {
//     versus = "Computer won the game!"
//   } else if (computerScore < playerScore) {
//     versus = "You won the game!"
//   }
//   //console.log("playerscore is " + playerScore + " computerScore is " + computerScore)
//   console.log(result)
//   return versus;
// }

// console.log(game())
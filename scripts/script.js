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

let player = document.getElementById("player");
let pc = document.getElementById("pc");

let playerScore = parseInt(player.innerHTML[player.innerHTML.length - 1]);
let computerScore = parseInt(pc.innerHTML[pc.innerHTML.length - 1]);

function playRound(playerSelection, computerSelection) {
  console.log("esto es playerselection " + playerSelection)
  console.log("esto es computerselection " + computerSelection)
    //playerSelection = playerSelection.toLowerCase();
    //console.log("esto es playerselection minus" + playerSelection)

    //computerSelection = computerPlay();
    //console.log("computer selection is " + computerSelection + " and player selection is " + playerSelection);
  let round = "no se ha jugado";

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      round = "Tie!";
    } else if (computerSelection == "paper") {
      round = "You Lose! Paper beats Rock";
      computerScore++;
      pc.innerHTML = "PC: " + computerScore;
    } else if (computerSelection == "scissors") {
      round = "You Win! Rock beats Scissors";
      playerScore++;
      player.innerHTML = "You: " + playerScore;
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      round = "You Win! Paper beats Rock";
      playerScore++;
      player.innerHTML = "You: " + playerScore;
    } else if (computerSelection == "paper") {
      round = "Tie!";
    } else if (computerSelection == "scissors") {
      round = "You Lose! Scissors beat Paper";
      computerScore++;
      pc.innerHTML = "PC: " + computerScore;
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
        round = "You Lose! Rock beats Scissors";
        computerScore++;
        pc.innerHTML = "PC: " + computerScore;
      } else if (computerSelection == "paper") {
        round = "You Win! Scissors beat Paper";
        playerScore++;
        player.innerHTML = "You: " + playerScore;
      } else if (computerSelection == "scissors") {
        round = "Tie!"
      }
  }
  computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  alert("Computer chose: " + computerSelection + "\n" + round);

  if (playerScore == 3) {
    alert("You win the game!");
  } else if (computerScore == 3) {
    alert("The computer wins the game!");
  }
  
  return round;
}

//console.log("este es el final playerScore " + playerScore + " y este es el final computerScore " + computerScore);

//DOM

const playerInput = "";
const rock = document.getElementById('rockb');
const paper = document.getElementById('paperb');
const scissors = document.getElementById('scissorsb');

const rockPlay = function() {
  //console.log("acabe de escoger roca 1");

  let result = playRound("rock",computerPlay()); 
  console.log("resultado "+result);
}

rock.addEventListener("click", rockPlay);

const paperPlay = function() {
  //console.log("acabe de escoger papel 1");

  let result = playRound("paper",computerPlay());
  console.log("resultado "+result);
}

paper.addEventListener("click", paperPlay);

const scissorsPlay = function() {
  //console.log("acabe de escoger tijeras 1");

  let result = playRound("scissors",computerPlay());
  console.log("resultado "+result);
}

scissors.addEventListener("click", scissorsPlay);

console.log(playRound);


// PLAY GAME FUNCTION (5 ROUNDS)
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
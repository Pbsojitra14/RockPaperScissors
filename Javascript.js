let ROCKRANGE    = 0.3;
let PAPERRANGE   = 0.6;

let computerWins    = 0;
let userWins        = 0;

let rounds          = 0;

function getComputerChoice()
{
    let compChoice = Math.random();
    if(compChoice<=ROCKRANGE)
    {
        return "ROCK";
    }
    else if(compChoice>ROCKRANGE || compChoice<= PAPERRANGE)
    {
        return "PAPER";
    }
    else
    {
        return "SCISSOR"
    }
}

function getHumanChoice()
{
    return prompt("Enter Rock Paper or Scissors").toUpperCase();
}

function singleRound()
{
    rounds++;
    console.log("Round " + rounds);
    let compChoice = getComputerChoice();
    let userChoice = getHumanChoice();
}

function Game(totalRounds = 5)
{
    while(rounds != totalRounds)
    {
        singleRound();
    }
    console.log("GAME OVER!")
}

Game();
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
    else if(compChoice>ROCKRANGE && compChoice<= PAPERRANGE)
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

const doc = document.querySelector("body");
let buttonRock    = document.createElement("button");
let buttonPaper   = document.createElement("button");
let buttonScissor = document.createElement("button");

buttonRock.innerText = "Select Rock"
buttonPaper.innerText = "Select Paper"
buttonScissor.innerText = "Select Scissors"

doc.appendChild(buttonRock);
doc.appendChild(buttonPaper);
doc.appendChild(buttonScissor);

let accouncer = document.createElement("h1")
accouncer.innerText="The Winner is !";
doc.appendChild(accouncer);

buttonPaper.addEventListener("click", ()=>
{
    let compChoice = getComputerChoice();
    if(compChoice =="ROCK")
    {
        accouncer.innerText="HUMAN Wins!"
    }
    else if(compChoice =="PAPER")
    {
        accouncer.innerText="Tie!"
    }
    else
    {
        accouncer.innerText="COMPUTER WIN"
    }
}
)

buttonRock.addEventListener("click", ()=>
{
    let compChoice = getComputerChoice();
    if(compChoice =="ROCK")
    {
        accouncer.innerText="tIE!"
    }
    else if(compChoice =="PAPER")
    {
        accouncer.innerText="COMPUTER WINS!"
    }
    else
    {
        accouncer.innerText="HUMAN WIN"
    }
}
)

buttonScissor.addEventListener("click", ()=>
    {
        let compChoice = getComputerChoice();
        if(compChoice =="ROCK")
        {
            accouncer.innerText="computer Wins!"
        }
        else if(compChoice =="PAPER")
        {
            accouncer.innerText="HUMANS WIN!"
        }
        else
        {
            accouncer.innerText="TIE"
        }
    }
    )
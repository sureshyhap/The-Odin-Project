// Selects a random hand for the computer
let getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

// Reads the player's choice of hand
function getHumanChoice() {
    let humanResponse;
    do {
        humanResponse = prompt("Enter your choice of hand: ");
        humanResponse = humanResponse.toLowerCase();
    } while (humanResponse !== "rock" && humanResponse !== "paper" &&
            humanResponse !== "scissors");
    return humanResponse;
}

// Determines the winner
function gameLogic(compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        return 0;
    }
    else if (compChoice === "rock" && humanChoice === "scissors" ||
             compChoice === "scissors" && humanChoice === "paper" ||
             compChoice === "paper" && humanChoice === "rock") {
                return -1;
             }
    else {
        return 1;
    }
}

// Capitalizes hands
function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

// Game loop
let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    // Play a single round
    let playRound = (compChoice, humanChoice) => {
        console.log(`Computer chose: ${compChoice}`);
        console.log(`Your choice: ${humanChoice}`);
        let resultNum = gameLogic(compChoice, humanChoice); 
        if (resultNum === -1) {
            computerScore += 1;
        }
        else if (resultNum === 1) {
            humanScore += 1;
        }    
        let result;
        compChoice = capitalize(compChoice);
        humanChoice = capitalize(humanChoice);
        switch (resultNum) {
            case 0:
                result = "It's a tie!";
                break;
            case -1:
                result = `${compChoice} beats ${humanChoice}!\nYou lose!`;
                break;
            case 1:
                result = `${humanChoice} beats ${compChoice}!\nYou win!`;
                break;
        }
        console.log(result);
    };
    console.log("Welcome to Rock, Paper, Scissors!");    
    const NUM_ROUNDS = 5;
    let compChoice;
    let humanChoice;
    for (let i = 0; i < NUM_ROUNDS; ++i) {
        console.log(`\nGame ${i + 1}: `);
        compChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(compChoice, humanChoice);
    }
    console.log(`\nAll ${NUM_ROUNDS} rounds complete!`);
    if (computerScore > humanScore) {
        console.log(`Computer wins with a score of ${computerScore}!`);
    }
    else if (computerScore < humanScore) {
        console.log(`You win with a score of ${humanScore}!`);
    }
    else {
        console.log("It's a tie!");
    }
    console.log("Thanks for playing, Goodbye!");
};

playGame();
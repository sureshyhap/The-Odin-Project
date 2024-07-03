function getRandomInt(start, end) {
    return Math.random() * (end - start) + start;
}

let machineActive = true;
let score = getRandomInt(0, 100);
let response;

if (machineActive) {
    if (score < 0 || score > 100) {
        response = "This is not possible, an error has occurred.";
    }
    else if (score < 20) {
        response = "That was a terrible score — total fail!";
    }
    else if (score < 40) {
        response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
    }
    else if (score < 70) {
        response = "You did a passable job, not bad!";
    }
    else if (score < 90) {
        response = "That\'s a great score, you really know your stuff."
    }
    else {
        response = "What an amazing score! Did you cheat? Are you for real?";
    }
}
else {
    response = "Machine is inactive. Please turn the machine on!";
}

const scoring_div = document.querySelector("div.scoring");
const print_score = document.querySelector("p.display-score");
print_score.textContent = `You got a ${score}.`;
print_score.style.fontWeight = "bold";
let statement = document.createElement("p");
statement.textContent = response;
scoring_div.appendChild(statement);
const computerOptionImageEl = document.querySelector("#computer-frame img");
const playerOptionImageEl = document.querySelector("#player-frame img");
const playerChoices = document.querySelectorAll("#choices .choice");
const computerScoreEl = document.querySelector("#computer-score");
const playerScoreEl = document.querySelector("#player-score");

const images = {
    "rock": "./images/rock.png",
    "scissor": "./images/scissor.png",
    "paper": "./images/paper.png"
}

let computerOption, playerOption
computerOption = playerOption = undefined;

function generateRndmNum() {
    let result;
    let number = Math.floor(Math.random() * 3 + 1);
    number === 1 ? result = 0 : number === 2 ? result = 1 : number === 3 ? result = 2 : result = 0;
    return result;
}

function increaseScore(player) {
    let newScore = parseInt(player.textContent)
    newScore++;
    player.textContent = newScore;
}

function checkComputerOption() {

    if(computerOption === "rock") {

        if(playerOption === "paper") increaseScore(playerScoreEl)
        
        if(playerOption === "scissor") increaseScore(computerScoreEl)
        
    }
    
    if(computerOption === "scissor") {

        if(playerOption === "rock") increaseScore(playerScoreEl)
        
        if(playerOption === "paper") increaseScore(computerScoreEl)
        
    }
    
    if(computerOption === "paper") {

        if(playerOption === "scissor")  increaseScore(playerScoreEl)

        if(playerOption === "rock") increaseScore(computerScoreEl)

    }

}

function handlePlayerChoiceClick() {
        const choiseImageSource = this.getAttribute("data-src");
        playerOptionImageEl.src = choiseImageSource
        computerOptionImageEl.src = Object.values(images)[generateRndmNum()]
        // find the move of computer to get src

        for (const key in images) 
            if (computerOptionImageEl.getAttribute("src") == images[key]) computerOption = key;
        
        for (const key in images) 
            if (this.getAttribute("data-choice") == key) playerOption = key
        
        checkComputerOption()
}

playerChoices.forEach((playerChoice) => playerChoice.addEventListener('click', handlePlayerChoiceClick))
let playerChoice = "";
let player2Choice = "";
let player1Turn = true;

let player1Points = 0;
let player2Points = 0;
let cpuPoints = 0;

let targetScore = 0;
let isGameActive = true;
let isMultiplayerMode = false;

const home = document.getElementById('home')
const SinglePlayerBtn = document.getElementById('SinglePlayerBtn');
const MultiplayerBtn = document.getElementById('MultiplayerBtn');
const showMode = document.getElementById('showMode');
const rockImg = document.getElementById('rockImg');
const paperImg = document.getElementById('paperImg');
const scissorsImg = document.getElementById('scissorsImg');
const lizardImg = document.getElementById('lizardImg');
const spockImg = document.getElementById('spockImg');
const prompt = document.getElementById('prompt');
const promptBox1 = document.getElementById('promptBox1');
const prompt2 = document.getElementById('prompt2');
const promptBox2 = document.getElementById('promptBox2');
const playerIcon = document.getElementById('playerIcon');
const player2Icon = document.getElementById('player2Icon');
const suddenDeath = document.getElementById('suddenDeath');
const bestThree = document.getElementById('bestThree');
const bestFive = document.getElementById('bestFive');
const bestSeven = document.getElementById('bestSeven');
const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');
const cpuScore = document.getElementById('cpuScore');
const homeBtn = document.getElementById('homeBtn');
const showCpuGame = document.getElementById('showCpuGame');
const playAgainPrompt = document.getElementById('playAgainPrompt');
const playAgain = document.getElementById('playAgain');
const playerName = document.getElementById('playerName');
const player2Name = document.getElementById('player2Name');


const getChoice = async () => {
    try {
        const response = await fetch("https://rpslsaproject-csfuczc6d2cvazhu.westus-01.azurewebsites.net/RPSLS/RPSLS");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching choice:", error);
        return "Rock";
    }
}

SinglePlayerBtn.addEventListener('click', () => {
    showMode.classList = "";
    home.classList = "hide";
    isMultiplayerMode = false;
})

MultiplayerBtn.addEventListener('click', () => {
    showMode.classList = "";
    home.classList = "hide";
    isMultiplayerMode = true;
    prompt.innerText = "Player 1's Turn";
    player2Icon.src ="./assets/Player Icon.png"
    playerName.innerText ="Player 1"
    player2Name.innerText ="Player 2"
});

suddenDeath.addEventListener('click', () => {
    showMode.className = "hide";
    showCpuGame.className = "";
    promptBox2.className = "hide";
    prompt2.className = "hide";
    targetScore = 1;
})

bestThree.addEventListener('click', () => {
    showMode.className = "hide";
    showCpuGame.className = "";
    promptBox2.className = "hide";
    prompt2.className = "hide";
    targetScore = 2;
})

bestFive.addEventListener('click', () => {
    showMode.className = "hide";
    showCpuGame.className = "";
    promptBox2.className = "hide";
    prompt2.className = "hide";
    targetScore = 3;
})

bestSeven.addEventListener('click', () => {
    showMode.className = "hide";
    showCpuGame.className = "";
    promptBox2.className = "hide";
    prompt2.className = "hide";
    targetScore = 4;
})

homeBtn.addEventListener('click', () => {
    showMode.className = "hide";
    showCpuGame.className = "hide"
    home.className = "homeGrid"
})

//playagain sets classes 
playAgain.addEventListener('click', () => {
    player1Points = 0;
    player2Points = 0;
    cpuPoints = 0;
    isGameActive = true;
    player1Turn = true;
    player1Score.innerText = "0";
    player2Score.innerText = "0";
    promptBox1.className ="boxBlue"
    prompt.innerText = "Select a Hand";
    prompt.className ="font1 m-4 promptFont"
    prompt2.innerText = "";
    prompt2.className = "hide";
    promptBox2.className = "hide";
    playAgainPrompt.className = "hide";
    if (isMultiplayerMode) {
        playerIcon.src = "./assets/Player Icon.png"
        player2Icon.src = "./assets/Player Icon.png"
    } else {
        playerIcon.src = "./assets/Player Icon.png"
        player2Icon.src = "./assets/Robot.png"
    }
})

// see if game is over and sets classes
function isGameOver() {
    if (!isGameActive) return true;

    if (player1Points === targetScore) {
        prompt2.innerText = "Player 1 WON!";
        prompt2.className = "font1 m-4 promptFont";
        promptBox2.className = "boxBlue";
        playAgainPrompt.className = "playAgainPlacement"
        isGameActive = false;
        return true;
    } else if ((isMultiplayerMode && player2Points === targetScore) || (player2Points === targetScore)) {
        prompt2.innerText = isMultiplayerMode ? "Player 2 WON!" : "CPU WON!";
        prompt2.className = "font1 m-4 promptFont";
        promptBox2.className = "boxBlue";
        playAgainPrompt.className = "playAgainPlacement"
        isGameActive = false;
        return true;
    }
    return false;
}


rockImg.addEventListener('click', async () => {
    if (!isGameActive) return;

    if (isMultiplayerMode) {
        if (player1Turn) {
            playerChoice = "Rock";
            prompt.innerText = "Player 2's Turn";
            player1Turn = false;
        } else {
            player2Choice = "Rock";
            prompt.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            prompt2.className ="font1 m-4 promptFont"

            if (playerChoice === "Rock") {
                prompt.innerText = "Draw";
                promptBox1.className = "boxBlue draw";
            } else if (playerChoice === "Paper" || playerChoice === "Spock") {
                prompt.innerText = `${playerChoice} Beats Rock`;
                prompt.className = "font2 mt-4 promptFont";
                promptBox1.className = "boxBlue";
                player1Points++;
                player1Score.innerText = player1Points;
            } else {
                prompt.innerText = "Rock Beats " + playerChoice;
                promptBox1.className = "boxBlue";
                player2Points++;
                player2Score.innerText = player2Points;
            }
            player1Turn = true;
            prompt.className = "font2 mt-4 promptFont";
            isGameOver();
            if (isGameActive) prompt2.innerText = "Player 1's Turn";
        }
        return;
    }
    let cpuChoice = await getChoice();
    prompt2.className = "font1 m-4 promptFont";
    promptBox2.className = "boxBlue";
    playerIcon.src = "./assets/rock.png";
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw";
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            break;

        case "Paper":
            prompt.innerText = "Paper Beats Rock";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Scissors":
            prompt.innerText = "Rock Beats Scissors";
            promptBox1.className = "boxBlue win"
            prompt.className = "font2 mt-4 promptFont width";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Lizard":
            prompt.innerText = "Rock Beats Lizard";
            prompt.className = "font2 mt-4 promptFont width";
            promptBox1.className = "boxBlue win"
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Spock":
            prompt.innerText = "Spock Beats Rock";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;
    }
});

paperImg.addEventListener('click', async () => {
    if (!isGameActive) return;

    if (isMultiplayerMode) {
        if (player1Turn) {
            playerChoice = "Paper";
            prompt.innerText = "Player 2's Turn";
            player1Turn = false;
        } else {
            player2Choice = "Paper";
            prompt.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            prompt2.className ="font1 m-4 promptFont"

            if (playerChoice === "Paper") {
                prompt.innerText = "Select a Hand";
                promptBox1.className = "boxBlue draw";
            } else if (playerChoice === "Scissors" || playerChoice === "Lizard") {
                prompt.innerText = `${playerChoice} Beats Paper`;
                prompt.className = "font2 mt-4 promptFont";
                promptBox1.className = "boxBlue";
                player1Points++;
                player1Score.innerText = player1Points;
            } else {
                prompt.innerText = "Paper Beats " + playerChoice;
                promptBox1.className = "boxBlue";
                player2Points++;
                player2Score.innerText = player2Points;
            }

            player1Turn = true;
            prompt.className = "font2 mt-4 promptFont";
            isGameOver();
            if (isGameActive) prompt.innerText = "Player 1's Turn";
        }
        return;
    }

    let cpuChoice = await getChoice();
    prompt2.className = "font1 m-4 promptFont";
    promptBox2.className = "boxBlue";
    playerIcon.src = "./assets/paper.png";
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Paper Beats Rock";
            promptBox1.className = "boxBlue win";
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Paper":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            break;

        case "Scissors":
            prompt.innerText = "Scissors Beats Paper";
            promptBox1.className = "boxBlue lose width"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Lizard":
            prompt.innerText = "Lizard Beats Paper";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Spock":
            prompt.innerText = "Paper Beats Spock";
            promptBox1.className = "boxBlue win"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;
    }
});

scissorsImg.addEventListener('click', async () => {
    if (!isGameActive) return;

    if (isMultiplayerMode) {
        if (player1Turn) {
            playerChoice = "Scissors";
            prompt.innerText = "Player 2's Turn";
            player1Turn = false;
        } else {
            player2Choice = "Scissors";
            prompt.innerText ="Select a Hand";
            promptBox2.className ="boxBlue"
            prompt2.className = "font1 mt-4 promptFont";


            if (playerChoice === "Scissors") {
                prompt.innerText = "Draw";
                promptBox1.className = "boxBlue draw";
            } else if (playerChoice === "Rock" || playerChoice === "Spock") {
                prompt.innerText = `${playerChoice} Beats Scissors`;
                prompt.className = "font2 mt-4 promptFont";
                promptBox1.className = "boxBlue";
                player1Points++;
                player1Score.innerText = player1Points;
            } else {
                prompt.innerText = "Scissors Beats " + playerChoice;
                promptBox1.className = "boxBlue";
                player2Points++;
                player2Score.innerText = player2Points;
            }

            player1Turn = true;
            prompt.className = "font2 mt-4 promptFont";
            isGameOver();
            if (isGameActive) prompt.innerText = "Player 1's Turn";
        }
        return;
    }

    let cpuChoice = await getChoice();
    prompt2.className = "font1 m-4 promptFont";
    promptBox2.className = "boxBlue";
    playerIcon.src = "./assets/scissors.png";
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Rock Beats Scissors";
            promptBox1.className = "boxBlue lose";
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Paper":
            prompt.innerText = "Scissors Beats Paper";
            promptBox1.className = "boxBlue win width"
            prompt.className = "font2 mt-4 promptFont";
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Scissors":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            break;

        case "Lizard":
            prompt.innerText = "Scissors Beats Lizard";
            promptBox1.className = "boxBlue win"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Spock":
            prompt.innerText = "Spock Beats Scissors";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;
    }
});

lizardImg.addEventListener('click', async () => {
    if (!isGameActive) return;

    if (isMultiplayerMode) {
        if (player1Turn) {
            playerChoice = "Lizard";
            prompt.innerText = "Player 2's Turn";
            player1Turn = false;
        } else {
            player2Choice = "Lizard";
            prompt.innerText ="Select a Hand";
            promptBox2.className ="boxBlue"
            prompt2.className = "font1 mt-4 promptFont";

            if (playerChoice === "Lizard") {
                prompt.innerText = "Draw";
                promptBox1.className = "boxBlue draw";
            } else if (playerChoice === "Rock" || playerChoice === "Scissors") {
                prompt.innerText = `${playerChoice} Beats Lizard`;
                prompt.className = "font2 mt-4 promptFont";
                promptBox1.className = "boxBlue";
                player1Points++;
                player1Score.innerText = player1Points;
            } else {
                prompt.innerText = "Lizard Beats " + playerChoice;
                promptBox1.className = "boxBlue";
                player2Points++;
                player2Score.innerText = player2Points;
            }

            player1Turn = true;
            prompt.className = "font2 mt-4 promptFont";
            isGameOver();
            if (isGameActive) prompt.innerText = "Player 1's Turn";
        }
        return;
    }
    let cpuChoice = await getChoice();
    prompt2.className = "font1 m-4 promptFont";
    promptBox2.className = "boxBlue";
    playerIcon.src = "./assets/lizard.png";
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Rock Beats Lizard";
            promptBox1.className = "boxBlue lose";
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Paper":
            prompt.innerText = "Lizard Beats Paper";
            promptBox1.className = "boxBlue win width"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Scissors":
            prompt.innerText = "Scissors Beats Lizard";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver()
            break;

        case "Lizard":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            break;

        case "Spock":
            prompt.innerText = "Lizard Beats Spock";
            promptBox1.className = "boxBlue win"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player2Score.innerText = player1Points
            isGameOver();
            break;
    }
});

spockImg.addEventListener('click', async () => {
    if (!isGameActive) return;

    if (isMultiplayerMode) {
        if (player1Turn) {
            playerChoice = "Spock";
            prompt.innerText = "Player 2's Turn";
            player1Turn = false;
        } else {
            player2Choice = "Spock";
            prompt.innerText ="Select a Hand";
            promptBox2.className ="boxBlue"
            prompt2.className = "font1 mt-4 promptFont";

            if (playerChoice === "Spock") {
                prompt.innerText = "Draw";
                promptBox1.className = "boxBlue draw";
            } else if (playerChoice === "Paper" || playerChoice === "Lizard") {
                prompt.innerText = `${playerChoice} Beats Spock`;
                prompt2.className = "font2 mt-4 promptFont";
                promptBox1.className = "boxBlue";
                player1Points++;
                player1Score.innerText = player1Points;
            } else {
                prompt.innerText = "Spock Beats " + playerChoice;
                promptBox1.className = "boxBlue";
                player2Points++;
                player2Score.innerText = player2Points;
            }

            player1Turn = true;
            prompt.className = "font2 mt-4 promptFont";
            isGameOver();
            if (isGameActive) prompt.innerText = "Player 1's Turn";
        }
        return;
    }
    let cpuChoice = await getChoice();
    prompt2.className = "font1 m-4 promptFont";
    promptBox2.className = "boxBlue";
    playerIcon.src = "./assets/spock.png";
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Spock Beats Rock";
            promptBox1.className = "boxBlue win";
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player2Score.innerText = player1Points
            isGameOver();
            break;

        case "Paper":
            prompt.innerText = "Paper Beats Spock";
            promptBox1.className = "boxBlue lose width"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Scissors":
            prompt.innerText = "Spock Beats Scissors";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont width";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player1Points++;
            player1Score.innerText = player1Points
            isGameOver();
            break;

        case "Lizard":
            prompt.innerText = "Lizard Beats Spock";
            promptBox1.className = "boxBlue lose"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            player2Points++;
            player2Score.innerText = player2Points;
            isGameOver();
            break;

        case "Spock":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            prompt2.className = "font1 mt-4 promptFont";
            prompt2.innerText ="Select a Hand"
            promptBox2.className="boxBlue"
            break;
    }
});
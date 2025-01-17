let playerChoice = "";
let player2Choice = "";

let player1Points = 0;
let player2Points = 0;
let cpuPoints = 0;

let targetScore = 1;
let isGameActive = true;

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
const promptBox2 = document.getElementById('promptBox2');
const playerIcon = document.getElementById('playerIcon');
const player2Icon = document.getElementById('player2Icon');
const suddenDeath = document.getElementById('suddenDeath');
const bestTwo= document.getElementById('bestTwo');
const bestThree = document.getElementById('bestThree');
const bestFour = document.getElementById('bestFour');
const bestSeven = document.getElementById('bestSeven');
const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');
const cpuScore = document.getElementById('cpuScore');


const playAgainPrompt = document.getElementById('playAgainPrompt');

const getChoice = async () => {
    const response = await fetch("https://rpslsaproject-csfuczc6d2cvazhu.westus-01.azurewebsites.net/RPSLS/RPSLS");
    const data = await response.text();
    console.log(data);
    return data
}

SinglePlayerBtn.addEventListener('click', () =>{
    showMode.classList ="";
    home.classList = "hide";
})

rockImg.addEventListener('click', async () => {
    let cpuChoice = await getChoice();
    console.log(cpuChoice)
    playerIcon.src = "./assets/rock.png"
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;

    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw";
            prompt.className = "font2 mt-4 promptFont";
            break;

        case "Paper":
            prompt.innerText = "Paper Beats Rock";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            isGameOver();
            break;

        case "Scissors":
            prompt.innerText = "Rock Beats Scissors";
            promptBox1.className = "boxBlue win"
            prompt.className = "font2 mt-4 promptFont width";
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Lizard":
            prompt.innerText = "Rock Beats Lizard";
            promptBox1.className = "boxBlue win"
            player1Score++;
            player1Points++;
            player1Score.innerText = player1Points

            break;

        case "Spock":
            prompt.innerText = "Spock Beats Rock";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        default:
            console.log("Error")
    }
});

paperImg.addEventListener('click', async () => {
    let cpuChoice = await getChoice();
    console.log(cpuChoice)
    playerIcon.src = "./assets/paper.png"
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;
    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Paper Beats Rock";
            promptBox1.className = "boxBlue win";
            prompt.className = "font2 mt-4 promptFont";
            player1Score++;
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Paper":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            break;

        case "Scissors":
            prompt.innerText = "Scissors Beats Paper";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Lizard":
            prompt.innerText = "Lizard Beats Paper";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Spock":
            prompt.innerText = "Paper Beats Spock";
            promptBox1.className = "boxBlue win"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        default:
            console.log("Error")
    }
});

scissorsImg.addEventListener('click', async () => {
    let cpuChoice = await getChoice();
    console.log(cpuChoice)
    playerIcon.src = "./assets/scissors.png"
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;
    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Rock Beats Scissors";
            promptBox1.className = "boxBlue lose";
            prompt.className = "font2 mt-4 promptFont";
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Paper":
            prompt.innerText = "Scissors Beats Paper";
            promptBox1.className = "boxBlue win width"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Scissors":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            break;

        case "Lizard":
            prompt.innerText = "Scissors Beats Lizard";
            promptBox1.className = "boxBlue win"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Spock":
            prompt.innerText = "Spock Beats Scissors";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        default:
            console.log("Error")
    }
});

lizardImg.addEventListener('click', async () => {
    let cpuChoice = await getChoice();
    console.log(cpuChoice)
    playerIcon.src = "./assets/lizard.png"
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;
    switch (cpuChoice) {
        case "Rock":
            prompt.innerText = "Rock Beats Lizard";
            promptBox1.className = "boxBlue lose";
            prompt.className = "font2 mt-4 promptFont";
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Paper":
            prompt.innerText = "Lizard Beats Paper";
            promptBox1.className = "boxBlue win"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Scissors":
            prompt.innerText = "Scissors Beats Lizard";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Lizard":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            break;

        case "Spock":
            prompt.innerText = "Lizard Beats Spock";
            promptBox1.className = "boxBlue win"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        default:
            console.log("Error")
    }
});

spockImg.addEventListener('click', async () => {
    let cpuChoice = await getChoice();
    console.log(cpuChoice)
    playerIcon.src = "./assets/spock.png"
    player2Icon.src = `./assets/${cpuChoice.toLowerCase()}.png`;
    switch (cpuChoice) {
        case "Rock":

            prompt.innerText = "Spock Beats Rock";
            promptBox1.className = "boxBlue win";
            prompt.className = "font2 mt-4 promptFont";
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Paper":
            prompt.innerText = "Paper Beats Spock";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Scissors":
            prompt.innerText = "Spock Beats Scissors";
            promptBox1.className = "boxBlue win"
            player1Points++;
            player1Score.innerText = player1Points
            break;

        case "Lizard":
            prompt.innerText = "Lizard Beats Spock";
            promptBox1.className = "boxBlue lose"
            cpuPoints++;
            cpuScore.innerText = cpuPoints
            break;

        case "Spock":
            prompt.innerText = "Draw";
            promptBox1.className = "boxBlue draw"
            prompt.className = "font2 mt-4 promptFont";
            break;

        default:
            console.log("Error")
    }
});
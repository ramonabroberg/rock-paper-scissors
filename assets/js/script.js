document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        });
    }
});

function runGame (playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    changeImg(playerChoice, computerChoice);

    compare(playerChoice, computerChoice);
}

function changeImg(playerChoice, computerChoice) {
    let playerImg = document.getElementById("player-img");
    let computerImg = document.getElementById("computer-img");

    if (playerChoice == "1") {
        playerImg.src = "assets/images/l-rock.png";
    }
    else if (playerChoice == "2") {
        playerImg.src = "assets/images/l-paper.png";
    }
    else if (playerChoice == "3") {
        playerImg.src = "assets/images/l-scissors.png";
    }

    if (computerChoice == "1") {
        computerImg.src = "assets/images/r-rock.png"; 
    }
    else if (computerChoice == "2") {
        computerImg.src = "assets/images/r-paper.png";
    }
    else if (computerChoice == "3") {
        computerImg.src = "assets/images/r-scissors.png";
    }
}

function compare (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        addTie();
    }
    else if (playerChoice == "1") {
        if (computerChoice == 2) {
            addLoss();
        }
        else if (computerChoice == 3) {
            addWin();
        }
        else {
            alert(`Unknown game choice: ${computerChoice}`);
            throw `Unknown game choice: ${computerChoice}. Aborting!`;
        }
    }
    else if (playerChoice == "2") {
        if (computerChoice == 1) {
            addWin();
        }
        else if (computerChoice == 3) {
            addLoss();
        }
        else {
            alert(`Unknown game choice: ${computerChoice}`);
            throw `Unknown game choice: ${computerChoice}. Aborting!`;
        }
    }
    else if (playerChoice == "3") {
        if (computerChoice == 1) {
            addLoss();
        }
        else if (computerChoice == 2) {
            addWin();
        }
        else {
            alert(`Unknown game choice: ${computerChoice}`);
            throw `Unknown game choice: ${computerChoice}. Aborting!`;
        }
    }
    else {
        alert(`Unknown game choice: ${playerChoice}`);
        throw `Unknown game choice: ${playerChoice}. Aborting!`;
    }
}

function addWin () {
    let oldScore = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++oldScore;
}

function addTie () {
    let oldScore = parseInt(document.getElementById("tie").innerText);
    document.getElementById("tie").innerText = ++oldScore;
}

function addLoss () {
    let oldScore = parseInt(document.getElementById("loss").innerText);
    document.getElementById("loss").innerText = ++oldScore;
}
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

function compare () {

}

function addWin () {

}

function addTie () {

}

function addLoss () {

}
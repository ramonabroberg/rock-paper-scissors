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

function changeImg () {

}

function compare () {

}

function addWin () {

}

function addTie () {

}

function addLoss () {

}
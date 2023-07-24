window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    startButton.addEventListener("click", function () {
        startGame();
    });

    let game;

    function startGame(){
        console.log("start game");
        game = new Game();

        game.start();
    }

};
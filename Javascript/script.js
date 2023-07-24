//When clicking startButton, create a new instance of the Game class
// & start the game by invoking the start() method:

window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");       // dull text?

  startButton.addEventListener("click", function () {
    startGame();
  });

  let game;

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

// Function that handles keydown events
    function handleKeydown(event) {          //dull text? 
        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
        ];


    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
  
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
      window.addEventListener("keydown", handleKeydown);
    };


    
};
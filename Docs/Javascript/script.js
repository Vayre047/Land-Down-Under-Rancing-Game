//When clicking startButton, create a new instance of the Game class
// & start the game by invoking the start() method:
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restartButton");
 
  const endScreen = document.getElementById("end-game");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  // Implementing creditdButton
  /* creditsButton1.addEventListener("click", function () {
    creditsButton1.style.display = "flex";
    end

  }); */

  function startGame() {
    console.log("start game");

    game = new Game();

    game.start();
  }

  // Function that handles keydown (pressing a key) events
  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // prevent the default key actions from happening
      // in this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the play
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -5;
            break;
          case "ArrowUp":
            game.player.directionY = -5;
            break;
          case "ArrowRight":
            game.player.directionX = 5;
            break;
          case "ArrowDown":
            game.player.directionY = 5;
            break;
        }
      }
    }
  }

  // Function that handles keyup (releasing the key) events
  // Function that handles keydown (pressing a key) events
  function handleKeyUp(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // prevent the default key actions from happening
      // in this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the play
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  // Associate the handleKeyDown function with an Event Listener
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};

//When clicking startButton, create a new instance of the Game class
// & start the game by invoking the start() method:
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  let game; 

  restartButton.addEventListener('click', () => {
    location.reload();
  });

  function startGame() {
    console.log("start game");

    game = new Game();

    game.start();
  }

  // Function that handles keydown (pressing a key) events
  function handleKeyDown(event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    // Check if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      // prevent the default key actions from happening
      // in this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the play
      if(game){
        switch(key){
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
    }
  }

  // Function that handles keyup (releasing the key) events
  // Function that handles keydown (pressing a key) events
  function handleKeyUp(event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    // Check if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key) && game){
      // prevent the default key actions from happening
      // in this case, it's scroll-up / scroll-down / scroll-left / scroll-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the play
      if(game){
        switch(key){
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
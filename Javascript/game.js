class Game {
  //the 3 visual backgrounds
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-game");

    //player - rcreate it in the next iteration  (but why?)
    // this.player = null;

    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../Images/car.png"
    );

    //style for the game board
    this.width = 500;
    this.height = 600;

    // MVP if we have time we create more than one obstacle!
    this.obstacle1 = [];
    // this.obstacle2 = [];

    this.score = 0;

    this.lives = 3;

    // a flag used to track whether the game is over.
    this.gameIsOver = false;
  }

  // This Game will have 3 methods

  // Method 1
  start() {}

  // Method 2
  gameLoop() {}

  //Method 3
  update() {
    this.player.move();
  }
}

class Game {
  //the 3 visual backgrounds
  constructor() {
    this.startScreen = document.getElementById("startContainer");
    this.gameScreen = document.getElementById("game-intro");
    this.endScreen = document.getElementById("end-game");

    //player - create it in the next iteration
    // this.player = null;

    this.player = new Player(
      "Tomas and Agnes",
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../Docs/Images/car.png"
    );

    //Style for the game board
    this.width = 500;
    this.height = 600;

    // MVP if we have time we create more than one obstacle!
    this.obstacle1 = [];
    // this.obstacle2 = [];

    this.score = 0;

    this.lives = 3;

    this.gameIsOver = false;
  }

  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";

    // Start the game loop
    this.gameLoop();
  }

  gameLoop() {
    // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
    if (this.gameIsOver) {
      return;
    }

    this.update();

    // requestAnimationFrame is a JS method that
    // updates information of your screen

    // like am old movie. You have the tape that is nothing more thant photographs (frame). requestAnimationFrame is going to display, clear and display next photograph in order to create animation.

    window.requestAnimationFrame(() => this.gameLoop());
  }

  //This method is responsible for updating the game state during each loop iteration.
  update() {
    let score = document.getElementById('score');
    let lives = document.getElementById('lives');

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacle1.length; i++) {
      const obstacle = this.obstacle1[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      /*if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacle1.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      }*/ // If the obstacle is off the screen (at the bottom)
      if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacle1.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }
    // Update obstacle1
    if (!this.obstacle1.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true; //
      setTimeout(() => {
        this.obstacle1.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacle1.forEach((obstacle) => obstacle.element.remove());

    //Set the gameIsOver flag to true.
    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}

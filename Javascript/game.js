class Game {
  //the 3 visual backgrounds
  constructor() {
    this.startScreen = document.getElementById("startContainer");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-game");

    //player - create it in the next iteration          (but why?)
    // this.player = null;

    this.player = new Player(
      "Tomas and Agnes",
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../Images/car.png"
    );

    //Style for the game board
    this.width = 500;
    this.height = 600;

    // MVP if we have time we create more than one obstacle!
    this.obstacle1 = [];
    // this.obstacle2 = [];

    this.score = 0;

    this.lives = 3;

    // A flag used to track whether the game is over.
    this.gameIsOver = false;
  }

  // This Game will have 3 methods

  // Method 1
  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  // Method 2
  gameLoop() {}

  //Method 3  - REVIEW
  //This method is responsible for updating the game state during each loop iteration.
  update() {
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }
    // Update Obstacles
    if (!this.obstacles.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true; //
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }
  }


    // Create a new method responsible for ending the game
    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        
        //Set the gameIsOver flag to true.
        this.gameIsOver = true;
    
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "block";
      }
}

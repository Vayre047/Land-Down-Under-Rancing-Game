class Game {
  //the 3 visual backgrounds
  constructor() {
    this.startScreen = document.getElementById("startContainer");
    this.gameScreen = document.getElementById("game-intro");
    this.endScreen = document.getElementById("end-game");

    //player - create it in the next iteration
    // this.player = null;

    // player details
    this.player = new Player(
      "Tomas and Agnes",
      this.gameScreen,
      200,
      300,
      100,
      150,
      "../Docs/Images/car.png"
    );

    //Style for the game board
    this.width = 600;
    this.height = 700;

    // MVP to be completed first - if time allows it more obstacles will be added
    this.kangaroosArray = [];
    this.joeysArray = [];

    // this.obstacle2 = [];

    // flag to give info if we're pushing an obstacle   <-----------------
    this.isPushingObstacle = false;
    this.isPushingJoeys = false;


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

    // Implementing a backgroundMusic
    this.backgroundMusic = document.createElement("audio");
    this.backgroundMusic.src = "./Docs/sounds/down_under.mp3";
    this.gameScreen.appendChild(this.backgroundMusic);
    this.backgroundMusic.play();
  }

  gameLoop() {
    // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
    if (this.gameIsOver) {
      return;
    }

    this.update();

    // requestAnimationFrame is a JS method that
    // updates information of your screen

    // like an old movie. You have the tape that is nothing more thant photographs (frame). requestAnimationFrame is going to display, clear and display next photograph in order to create animation.
    window.requestAnimationFrame(() => this.gameLoop());
  }

  //This method is responsible for updating the game state during each loop iteration.
  update() {
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    // Score and lives
    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    // Call player move function
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.kangaroosArray.length; i++) {
      const kangarooEnemy = this.kangaroosArray[i];
      kangarooEnemy.move();

      //Q: why do we comment the below out?

      // If the player's car collides with an kangarooEnemy    //  <-----------------
      if (this.player.didCollide(kangarooEnemy)) {
        // Remove the kangarooEnemy element from the DOM
        kangarooEnemy.element.remove();
        // Remove kangarooEnemy object from the array
        this.kangaroosArray.splice(i, 1);
        // Reduce player's lives by 1
        console.log("collision");
        this.lives--;
      }

      // If the kangarooEnemy is off the screen (at the bottom)
      if (kangarooEnemy.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the kangarooEnemy from the DOM
        kangarooEnemy.element.remove();
        // Remove kangarooEnemy object from the array
        this.kangaroosArray.splice(i, 1);
        // Update the counter variable to account for the removed kangarooEnemy
      }
    }

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    // Update kangaroosArray
    // Create a new kangarooEnemy based on a random probability (this will give a defined delay for the kangarooEnemy to appear)

    // only when there is no other kangarooEnemys on the screen
    if (!this.kangaroosArray.length && !this.isPushingObstacle) {
      //  <---------------------------
      this.isPushingObstacle = true; //
      setTimeout(() => {
        this.kangaroosArray.push(new Kangaroo(this.gameScreen));
        this.isPushingObstacle = false;
        console.log(this.kangaroosArray);
      }, 1000);
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    //remove player
    this.player.element.remove(); // // remove all obstacles
    this.kangaroosArray.forEach((kangarooEnemy) =>
      kangarooEnemy.element.remove()
    );

    //Set the gameIsOver flag to true.
    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.endScreen.style.display = "block";


    // if wanting to end backgroundMusic
   // this.backgroundMusic.pause();
   
  }
}

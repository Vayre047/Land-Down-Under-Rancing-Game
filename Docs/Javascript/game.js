class Game {
  //the 3 visual backgrounds
  constructor() {
    this.startScreen = document.getElementById("startContainer");
    this.gameScreen = document.getElementById("game-intro");
    this.endScreen = document.getElementById("end-game");
    this.statusScreen = document.getElementById("fontFam");

    // Player - create it in the next iteration
    // this.player = null;

    // Player details
    this.player = new Player(
      "Tomás and Agnes",
      this.gameScreen,
      200,
      300,
      70,
      120,
      "Docs/Images/car.png"
    );

    //Style for the game board
    this.width = 500;
    this.height = 620;

    // MVP to be completed first - if time allows it more obstacles will be added
    this.kangaroosArray = [];
    this.joeysArray = [];
    this.rooRooArray = [];

    // Flag to give info if we're pushing an obstacle   <-----------------
    this.isPushingObstacle = false;
    this.isPushingJoeys = false;
    this.isPushingRooRoo = false;

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

    this.statusScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "flex";
    // Show the status screen
    this.statusScreen.style.display = "flex";

    // Start the game loop
    this.gameLoop();

    // Implementing a backgroundMusic
    this.backgroundMusic = document.createElement("audio");
    this.backgroundMusic.src = "Docs/sounds/down_under.mp3";
    this.gameScreen.appendChild(this.backgroundMusic);
    this.backgroundMusic.play();

    if (localStorage.getItem("record") != 0) {
      document.getElementById("record").innerHTML = localStorage.getItem("record");
    }

    // let local = localStorage.getItem("record");

    //record.innerHTML = local;
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
    //getting lives and score from HTML
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    // updating score and lives
    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    // Call player move function
    this.player.move();

    // Check for collision and if an obstacle is still on the screen

    //   Kangaroo class  <---------------------------------------------

    for (let i = 0; i < this.kangaroosArray.length; i++) {
      const kangarooEnemy = this.kangaroosArray[i];
      kangarooEnemy.move();

      // Checking if there's collision with kangaroo
      if (this.player.didCollide(kangarooEnemy)) {
        // Remove the kangarooEnemy element from the DOM
        kangarooEnemy.element.remove();

        // Remove kangarooEnemy object from the array
        this.kangaroosArray.splice(i, 1);

        // Reduce player's lives by 1
        console.log("collision");
        this.lives--;
      }

      // If there's no collision and the kangaroo gets out of screen
      if (kangarooEnemy.top > this.height) {
        // Increase the score by 1
        this.score++;

        // Remove the kangarooEnemy from the DOM
        kangarooEnemy.element.remove();

        // Remove kangarooEnemy object from the array
        this.kangaroosArray.splice(i, 1);
      }
    }

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    //updating new kangaroos from kangaroo class, if there's no kangaroo in screen
    if (!this.kangaroosArray.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;

      setTimeout(() => {
        this.kangaroosArray.push(new Kangaroo(this.gameScreen));
        this.isPushingObstacle = false;
        console.log(this.kangaroosArray);
      }, 1000);
    }

    //   Joeys class  <---------------------------------------------

    for (let i = 0; i < this.joeysArray.length; i++) {
      const joeyEnemy = this.joeysArray[i];
      joeyEnemy.move();

      // Checking if there's collision with joeys
      if (this.player.didCollide(joeyEnemy)) {
        // Remove the joeyEnemy element from the DOM
        joeyEnemy.element.remove();

        // Remove joeyEnemy object from the array
        this.joeysArray.splice(i, 1);

        // Reduce player's lives by 1
        console.log("collision");
        this.lives--;
      }

      // If there's no collision and the joeys gets out of screen
      if (joeyEnemy.left <= 0) {
        // Increase the score by 1
        this.score++;

        // Remove the joeyEnemy from the DOM
        joeyEnemy.element.remove();

        // Remove kangarooEnemy object from the array
        this.joeysArray.splice(i, 1);
      }
    }

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    //updating new joeys from joeys class, if there's no joeys in screen
    if (!this.joeysArray.length && !this.isPushingJoeys) {
      this.isPushingJoeys = true;

      setTimeout(() => {
        this.joeysArray.push(new KangarooJoey(this.gameScreen));
        this.isPushingJoeys = false;
        console.log(this.joeysArray);
      }, 1500);
    }

    //   Rooroo class  <---------------------------------------------

    for (let i = 0; i < this.rooRooArray.length; i++) {
      const kangarooEnemy = this.rooRooArray[i];
      kangarooEnemy.move();

      // Checking if there's collision with Rooroo
      if (this.player.didCollide(kangarooEnemy)) {
        // Remove the kangarooEnemy element from the DOM
        kangarooEnemy.element.remove();

        // Remove kangarooEnemy object from the array
        this.rooRooArray.splice(i, 1);

        // Reduce player's lives by 1
        console.log("collision");
        this.lives--;
      }

      // If there's no collision and the rooroo gets out of screen
      if (kangarooEnemy.left > 600) {
        // Increase the score by 1
        this.score++;

        // Remove the kangarooEnemy from the DOM
        kangarooEnemy.element.remove();

        // Remove kangarooEnemy object from the array
        this.rooRooArray.splice(i, 1);
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    //updating new rooroo from joeys class, if there's no rooroo in screen
    if (!this.rooRooArray.length && !this.isPushingRooRoo) {
      this.isPushingRooRoo = true;

      setTimeout(() => {
        this.rooRooArray.push(new RooRoo(this.gameScreen));
        this.isPushingRooRoo = false;
        console.log(this.rooRooArray);
      }, 2000);
    }
  }

  // Create a method responsible for ending the game
  endGame() {
    lives.innerHTML = this.lives ;

    //remove player
    this.player.element.remove();

    // remove all obstacles
    this.kangaroosArray.forEach((kangarooEnemy) =>
      kangarooEnemy.element.remove()
    );
    this.joeysArray.forEach((kangarooEnemy) => kangarooEnemy.element.remove());
    this.rooRooArray.forEach((kangarooEnemy) => kangarooEnemy.element.remove());

    //Set the gameIsOver flag to true.
    this.gameIsOver = true;

    let score = parseInt(document.getElementById("score").innerHTML);
    let record = parseInt(document.getElementById("record").innerHTML);

    if (score > record) {
      localStorage.setItem("record", score);
    }

    // Hide game screen
    this.gameScreen.style.display = "none";

    // If to hude the statusScreen uncoment below
    //this.statusScreen.style.display = "none";

    // Show end game screen
    this.endScreen.style.display = "flex";

    // if wanting to end backgroundMusic
    // this.backgroundMusic.pause();
  }
}

class Player {
  constructor(name, gameScreen, left, top, width, height, imgSrc) {
    this.name = name;
    // Id came from
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.imgSrc = imgSrc;
    this.score = 0;
    this.record = 0;

    this.directionX = 0;

    this.directionY = 0;

    // Create a image element
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
    // Adding sound effect upon collision with object   
    this.sound = new Audio("./docs/sounds/oh_no.mp3")
  }

  move() {
    // Update player's car position based on directionX and directionY
      this.left += this.directionX;
      this.top += this.directionY;
  
      // Ensure the player's car stays within the game screen
  
      // handles right and left  side
      // offsetWidth returns the layout width as a number
      if (this.left + this.width > this.gameScreen.offsetWidth) {
        this.left = this.gameScreen.offsetWidth - this.width;
      } else if(this.left < 0){
        this.left = 0;
      }

      // handles bottom and top side
      // offsetHeight returns the layout height as a number
      if (this.top + this.height > this.gameScreen.offsetHeight) {
        this.top = this.gameScreen.offsetHeight - this.height;
      }
      else if (this.top < 0) {
        this.top = 0; // top border
      }
  
      // Update the player's car position on the screen
      this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  getRecord() {
    // If the score is greater than last record we will have a new record
    if (this.score > this.record) {
      prompt("You beat your last record");
    }
  }

  didCollide(obstacle) {
    // define it as a rectangle and give left, right, top and bottom properties
    //getBoundingClientRect() returns info about top, left, right, bottom, width, height, x and y position of the HTML element
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
        // checking if the player is "toucing" with the obstacle 
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
        
        // audio file - connects to the audio upon collision with objects
        this.sound.play()
        // if the player collides return true
      return true;
    } else {
      return false;
    }
  }
}

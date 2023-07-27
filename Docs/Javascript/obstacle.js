// creating obstacle instances:
class Kangaroo {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // creating a random positioning of the obstacle
    this.left = Math.floor(Math.random() * 300 + 70);
    // Determining the width and height of the obstacle
    this.top = 0;
    this.width = 90;
    this.height = 110;
    this.element = document.createElement("img");

    // creating the HTML element and default styling
    this.element.src = "../Docs/Images/kangaroo.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    //append the obstacle element to the gameScreen.
    this.gameScreen.appendChild(this.element);
  }

  // The obstacle will use the 2 below methods:  updatePosition() and move()
  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 5;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}


// Implementing obstacle coming from right handside of the screen
class KangarooJoey {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // creating a random positioning of the obstacle
    this.left = 600;
    // Determining the width and height of the obstacle
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 90;
    this.height = 110;
    this.element = document.createElement("img");

    // creating the HTML element and default styling
    this.element.src = "../Docs/Images/roo.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    //append the obstacle element to the gameScreen.
    this.gameScreen.appendChild(this.element);
  }

  // The obstacle will use the 2 below methods:  updatePosition() and move()
  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    //In order to move from right to left you need to decrement/decrease left values -=
    this.left -= 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}



// Implementing obstacle coming from left handside of the screen to right
class RooRoo {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // creating a random positioning of the obstacle at the left handside of the screen
    this.left = 0; // in order to start at the left side
    // Determining the width and height of the obstacle
    
    // top refers to the height 
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 100;
    this.height = 130;
    this.element = document.createElement("img");

    // creating the HTML element and default styling
    this.element.src = "../Docs/Images/roo3.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    //append the obstacle element to the gameScreen.
    this.gameScreen.appendChild(this.element);
  }

  // The obstacle will use the 2 below methods:  updatePosition() and move()
  updatePosition() {
    // Update the obstacle's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the obstacle down by 3px
    //In order to move from left to right you need to increment left values +=
    this.left += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}


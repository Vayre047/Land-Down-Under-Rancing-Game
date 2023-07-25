// creating obstacle instances:
class Kangaroo {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // creating a random positioning of the obstacle
    this.left = Math.floor(Math.random() * 300 + 70);
    // Determining the width and height of the obstacle
    this.top = 0;
    this.width = 150;
    this.height = 150;
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

class KangarooJoey {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // creating a random positioning of the obstacle
    this.left = 600;
    // Determining the width and height of the obstacle
    this.top = Math.floor(Math.random() * 300 + 70);
    this.width = 150;
    this.height = 150;
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
    this.left -= 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }
}

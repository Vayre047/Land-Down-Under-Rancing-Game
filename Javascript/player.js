class Player{
    constructor(name, gameScreen, left, top, width, height, imgSrc){
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

        this.verticallyPosition = 0;

        this.horizontalPosition = 0;

        // Create a image element
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    
        this.gameScreen.appendChild(this.element);
    }

    deslocation(){
        // It will update the position's player
        this.left += this.horizontalPosition;
        this.top += this.verticallyPosition;

        // if sum of the left and the width is greater than of gameScreen size
        if(this.left + this.width > this.gameScreen.offsetWidth){
            this.left = this.gameScreen.offsetWidth - this.width;
        }else if(this.left <= 0){
            this.left = 0;
        }

        this.actualPosition();
    }

    actualPosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    getRecord(){
        // If the score is greater than last record we will have a new record
        if(this.score > this.record){
            prompt("You beat your last record");
        }
    }

    didHit(){
        const playerPosition = this.element.getBoundingClientRect();
        const obstaclePosition = obstacle.element.getBoundingClientRect();

        if(playerPosition.left < obstaclePosition.right &&
            playerPosition.right > obstaclePosition.left &&
            playerPosition.top < obstaclePosition.bottom &&
            playerPosition.bottom > obstaclePosition.top
        ){
            return false;
        }else{
            return true;
        }
    }
}
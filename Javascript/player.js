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

        // Give a image element a src 
        this.element.src = imgSrc;

        // Give to image element a absolute position 
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }

    getRecord(){
        // If the score is greater than last record we will have a new record
        if(this.score > this.record){
            prompt("You beat your last record");
        }
    }
}
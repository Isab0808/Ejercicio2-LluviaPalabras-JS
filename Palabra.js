class Palabra {
    constructor(word,posX,posY){
        this.posX = posX;
        this.posY = posY;
        this.word = word;
        this.velocidad = (random(1, 3));
    }

    draw(){
        textSize(14);
        text(this.word, this.posX, this.posY);
    }

    mover(){
        if (this.posY > height) {
			this.posY = 0;
        }
        this.posY += this.velocidad;
    }

    getposX(){
        return this.posX;
    }

    getposY(){
        return this.posY;
    }
}
export class Ecrou {

    constructor(x, y, width, heigth,imageSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;

        this.ready = false;

        this.image = new Image();

        // event quand l'image est chargée
        this.image.onload = () => {

            // image prete
            this.ready = true;
        }

        this.image.src =imageSrc;


    }

    draw(renderer) {
        
    }
}




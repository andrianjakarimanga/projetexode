export class Socle{

    constructor(x,y,width,heigth,newImageSrc) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;

        // au début l'image n'est pas prête
        this.ready = false;

        // initialisation de l'image
        this.image = new Image();

        // event quand l'image est chargée
        this.image.onload = () => {

            // image prete
            this.ready = true;
        }

        // définie le fichier image
        this.image.src = newImageSrc;
    }

    draw(renderer) {
       
    }
}
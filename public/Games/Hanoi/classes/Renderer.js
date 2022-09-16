
export class Renderer {

    constructor(backgroundSrc) {

        this.canvas = document.getElementById('canvas');
        this.addEvent();
        canvas.width = 1276;
        canvas.height = 710;
        this.context = canvas.getContext('2d');
        this.background = new Image();
        this.tige = new Image();

        this.tabShape = [];
        this.globalRect = null;
        this.rectIsSelected = false;
        this.poleOrigine = null;
        this.tigeOrigine = null;
        this.backgrounReady = false;
        this.tigeReady = false;

        this.pole1 = [];
        this.pole2 = [];
        this.pole3 = [];

        this.tige1 = [];
        this.tige2 = [];
        this.tige3 = [];

        this.background.onload = () => {
            console.log('background prêt');
            // Draw the image onto the context
            this.backgrounReady = true;
        }
        this.background.src = backgroundSrc;
    }

    addToTige(val, element) {
        switch (val) {
            case 1:
                this.tige1.push(element);
                break;
            case 2:
                this.tige2.push(element);
                break;
            case 3:
                this.tige3.push(element);
                break;
        }

    }

    addShape(shape) {
        // enregistre une nouvelle figure geometrique dans la liste de ce qu il y a  a dessiner
        this.tabShape.push(shape);
    }

    refresh() {
        console.log('refresh');
        if (!this.backgrounReady) return;


        // 1 - DESSINER LE FOND
        this.context.drawImage(this.background, 0, 0, 1276, 710);

        // 2 - DESSINER LE SOL ET LES TIGES
        // boucle qui parcourt la liste des figures geometriques a dessiner
        for (let shape of this.tabShape) {



            if (shape.ready) {

                this.context.drawImage(shape.image, shape.x, shape.y, shape.width, shape.heigth);
            }
        }

        // 200 => 55
        // 150 => 80
        // 100 => 105

        let _this = this;

        // 3 - DESSINER LES DISQUES
        // affichage des disques du pole1
        this.pole1.forEach(function (rect, i) {


            // positionnement en y
            rect.y = 588 - 50 * i;

            rect.heigth = 50;

            // position en x
            switch (rect.width) {
                case 240:
                    rect.x = 102;
                    break;
                case 200:
                    rect.x = 122;
                    break;
                case 160:
                    rect.x = 142;
                    break;
                case 120:
                    rect.x = 162;
                    break;
                case 80:
                    rect.x = 182;
                    break;
            }


            // affichage du rectangkle
            if (rect.ready) {

                _this.context.drawImage(rect.image, rect.x, rect.y, rect.width, rect.heigth);
            }

        })




        // affichage des disques du pole2
        this.pole2.forEach(function (rect, i) {

            // positionnement eb y
            rect.y = 588 - 50 * i;

            // position en x
            switch (rect.width) {
                case 240:
                    rect.x = 502;
                    break;
                case 200:
                    rect.x = 522;
                    break;
                case 160:
                    rect.x = 542;
                    break;
                case 120:
                    rect.x = 562;
                    break;
                case 80:
                    rect.x = 582;
                    break;

            }

            // affichage du rectangkle
            if (rect.ready) {

                _this.context.drawImage(rect.image, rect.x, rect.y, rect.width, rect.heigth);
            }
        })





        // affichage des disques du pole3
        this.pole3.forEach(function (rect, i) {

            // positionnement eb y
            rect.y = 588 - 50 * i;

            // position en x
            switch (rect.width) {
                case 240:
                    rect.x = 902;
                    break;
                case 200:
                    rect.x = 922;
                    break;
                case 160:
                    rect.x = 942;
                    break;
                case 120:
                    rect.x = 962;
                    break;
                case 80:
                    rect.x = 982;
                    break;

            }

            // affichage du rectangle
            if (rect.ready) {

                _this.context.drawImage(rect.image, rect.x, rect.y, rect.width, rect.heigth);
            }
        })

    }



    switchRectangle(rectangle, origine, destination) {
        origine.pop();
        destination.push(rectangle);
    }

    swicthTabTige(rectangle, origine, destination) {

        if (destination.length > 0 && rectangle.width > destination[destination.length - 1].width) {
            // alert('erreur');
        } else {
            origine.pop();
            destination.push(rectangle);
        }
    }

    /**
     * GESTIONNAIRE D'EVENEMENT SUR LE CANVAS
     */
    addEvent() {

        let _this = this;

        // gestion du click sur le canvas
        this.canvas.addEventListener('click', function (e) {
            // console.log(e);
            let rectHit = false;

            // vérifie si on a cliqué sur un disque de la premiere tige
            _this.pole1.forEach(function (rect, i) {

                /* vérifier si les colisions sont correctes */
                let hit = _this.collide(e.layerX, e.layerY, rect);
                if (hit) {
                    //_this.globalRect = rect;
                    _this.globalRect = _this.tige1[_this.tige1.length - 1];
                    // console.log(rect);
                    _this.tigeOrigine = _this.tige1;
                    _this.poleOrigine = _this.pole1;
                    rectHit = true;
                }
            });

            // vérifie si on a cliqué sur un disque de la deuxième tige
            _this.pole2.forEach(function (rect, i) {
                let hit = _this.collide(e.layerX, e.layerY, rect);
                if (hit) {
                    //_this.globalRect = rect;
                    _this.globalRect = _this.pole2[_this.pole2.length - 1];
                    _this.tigeOrigine = _this.tige2;
                    _this.poleOrigine = _this.pole2;
                    rectHit = true;
                }
            });

            // vérifie si on a cliqué sur un disque de la troisieme tige
            _this.pole3.forEach(function (rect, i) {
                let hit = _this.collide(e.layerX, e.layerY, rect);
                if (hit) {
                    //_this.globalRect = rect;
                    _this.globalRect = _this.pole3[_this.pole3.length - 1];
                    _this.tigeOrigine = _this.tige3;
                    _this.poleOrigine = _this.pole3;
                    rectHit = true;
                }
            });

            // si aucunez collision avec un disque
            if (!rectHit) {

                // vérifie si il y a collision avec une tige
                _this.tabShape.forEach(function (element, i) {
                    let hit = _this.collideTige(e.layerX, e.layerY, element);
                    if (hit && _this.rectIsSelected) {
                        let tige = null;
                        if (element.pole == "pole1") {
                            element = _this.pole1;
                            tige = _this.tige1;
                        }
                        if (element.pole == "pole2") {
                            element = _this.pole2;
                            tige = _this.tige2;
                        }
                        if (element.pole == "pole3") {
                            element = _this.pole3;
                            tige = _this.tige3;
                        }

                        _this.swicthTabTige(_this.globalRect, _this.tigeOrigine, tige);
                        _this.rectIsSelected = false;

                        if (tige.length > 0) {
                            if (!(tige[tige.length - 1].width < _this.globalRect.width)) {
                                _this.switchRectangle(_this.globalRect, _this.poleOrigine, element)
                            }
                        }
                        /* Check If Win */
                        if (_this.tige3.length == 5) {
                            alert('Bravo !');
                            document.querySelector('.closePopUpHanoiBtn').classList.remove('hidden');
                            gameHanoiIsDone = true;
                        }

                        _this.refresh();
                    }
                });
            }
        })
    }

    /**
     * GESTIONNAIRE DE COLLISION
     * Nous dit si un point (x, y) se trouve dans le rectangle (rect)
     * @param {*} x Position de la souris en x
     * @param {*} y Position de la souris en y
     * @param {*} rect Zone rectangulaire à tester
     * @returns 
     */
    collide(x, y, rect) {
        // console.log('Test de colision du point ' + x + ', ' + y + ' avec le rectangle :');
        // console.log(rect);
        if (x < rect.x) return false;
        if (x > rect.x + rect.width) return false;
        if (y < rect.y) return false;
        if (y > rect.y + rect.heigth) return false;

        this.rectIsSelected = true;
        return true;
    }

    collideTige(x, y, rect) {

        if (x < rect.x) return false;
        if (x > rect.x + rect.width) return false;
        if (y < rect.y) return false;
        if (y > rect.y + rect.heigth) return false;

        return true;
    }

    addToPole1(rectangle) {
        this.pole1.push(rectangle);
    }
    addToPole2(rectangle) {
        this.pole2.push(rectangle);
    }
    addToPole3(rectangle) {
        this.pole3.push(rectangle);
    }



    removeToPole1() {
        this.pole1.pop();
    }
    removeToPole2() {
        this.pole2.pop();
    }
    removeToPole3() {
        this.pole3.pop();
    }


}
import { Ecrou } from "./classes/Ecrou.js";
import { Renderer } from "./classes/Renderer.js";
import { Socle } from "./classes/Socle.js";
import { Tige } from "./classes/Tige.js";

let renderer = new Renderer("../Games/Hanoi/images/TourDeHanoi/background.jpg");

//initialisation des elements
let socle = new Socle(-10, 620, 1278, 100, "../Games/Hanoi/images/TourDeHanoi/Plateforme.png")
let tige1 = new Tige(200, 80, 50, 558, "../Games/Hanoi/images/TourDeHanoi/Barre.png", "pole1");
let tige2 = new Tige(600, 80, 50, 558, "../Games/Hanoi/images/TourDeHanoi/Barre.png", "pole2");
let tige3 = new Tige(1000, 80, 50, 558, "../Games/Hanoi/images/TourDeHanoi/Barre.png", "pole3");







// initialisation des rectangles de jeu
let ecrou5 = new Ecrou(0, 0, 240, 50, "../Games/Hanoi/images/TourDeHanoi/Ecrou1.png");
let ecrou4 = new Ecrou(0, 0, 200, 50, "../Games/Hanoi/images/TourDeHanoi/Ecrou2.png");
let ecrou3 = new Ecrou(0, 0, 160, 50, "../Games/Hanoi/images/TourDeHanoi/Ecrou3.png");
let ecrou2 = new Ecrou(0, 0, 120, 50, "../Games/Hanoi/images/TourDeHanoi/Ecrou4.png");
let ecrou1 = new Ecrou(0, 0, 80, 50, "../Games/Hanoi/images/TourDeHanoi/Ecrou5.png");



renderer.addToTige(1, ecrou1);
renderer.addToTige(1, ecrou2);
renderer.addToTige(1, ecrou3);
renderer.addToTige(1, ecrou4);
renderer.addToTige(1, ecrou5);




renderer.addShape(socle);
renderer.addShape(tige1);
renderer.addShape(tige2);
renderer.addShape(tige3);


renderer.addToPole1(ecrou1);
renderer.addToPole1(ecrou2);
renderer.addToPole1(ecrou3);
renderer.addToPole1(ecrou4);
renderer.addToPole1(ecrou5);



setTimeout(refresh, 50);

function refresh() {
    renderer.refresh();
}


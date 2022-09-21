var gameSnakeIsDone = true;
var gamePuzzleIsDone = true;
var gameHanoiIsDone = true;
var gameBoiteIsDone = true;

var timeGame = 0;




/* Intro */

function animIntroSynopsis() {
    document.getElementById('screenIntro').classList.add('hidden');
}
function turnOfftheLightAndStartGame() {
    document.querySelector(':root').classList.add("lumiere");
}

setTimeout(animIntroSynopsis, 10000);
setTimeout(turnOfftheLightAndStartGame, 10000)
/* Fin Intro */


/**************************************** OPEN VUES ***************************************/

// VUE AFFICHE open by clic
let zoomAffiche = document.getElementById('zoomAfficheBtn');
let vueAffiche = document.getElementById('vueAffiche');
zoomAffiche.addEventListener('click', function () {
    vueAffiche.classList.remove('hidden');
});
// VUE COFFRES open by clic
let zoomCoffres = document.getElementById('zoomCoffresBtn');
let vueCoffres = document.getElementById('vueCoffres');
zoomCoffres.addEventListener('click', function () {
    vueCoffres.classList.remove('hidden');
});
// VUE SNAKE open by clic
let zoomSnake = document.getElementById('zoomSnakeBtn');
let vueSnake = document.getElementById('vueSnake');
zoomSnake.addEventListener('click', function () {
    vueSnake.classList.remove('hidden');
});
// VUE BOITIER open by clic
let zoomBoitier = document.getElementById('zoomBoitierBtn');
let vueBoitier = document.getElementById('vueBoitier');
zoomBoitier.addEventListener('click', function () {
    vueBoitier.classList.remove('hidden');
});





/************************************ OPEN POPUP ***************************************/

let puzzleScreen = document.querySelector('.puzzleScreen');
let snakeScreen = document.querySelector('.snakeScreen');
let boitierScreen = document.querySelector('.boitierScreen');
let hanoiScreen = document.querySelector('.hanoiScreen');



// POPUP SNAKE open by clic
let openSnakeBtn = document.getElementById('openSnakeBtn');
let popupSnake = document.getElementById('popupSnake');
openSnakeBtn.addEventListener('click', function () {
    popupSnake.classList.remove('hidden');
    // LOAD GAME:
    //snakeScreen.innerHTML = '<object width="1920" height="1080" type="text/html" data="Games/Snake/snake.html" ></object>';
    jQuery('#gameScreenSnake').load('/Games/Snake/snake.html');

});

// POPUP PUZZLE open by clic
let openPuzzleBtn = document.getElementById('openPuzzleBtn');
let popupPuzzle = document.getElementById('popupPuzzle');
openPuzzleBtn.addEventListener('click', function () {

    if (gameSnakeIsDone) {

        popupPuzzle.classList.remove('hidden');
        // LOAD GAME:
        /* puzzleScreen.innerHTML = '<object width="1920" height="1080" type="text/html" data="Games/Puzzle/puzzle.html" ></object>'; */
        jQuery('#gameScreenPuzzle').load('/Games/Puzzle/puzzle.html');
    }

});


// POPUP HANOI open by clic
let openHanoiBtn = document.getElementById('openHanoiBtn');
let popupHanoi = document.getElementById('popupHanoi');
openHanoiBtn.addEventListener('click', function () {

    if (gamePuzzleIsDone) {
        popupHanoi.classList.remove('hidden');
        // LOAD GAME:
        /* hanoiScreen.innerHTML = '<object width="1920" height="1080" type="text/html" data="Games/Hanoi/hanoi.html" ></object>'; */
        jQuery('#gameScreenHanoi').load('/Games/Hanoi/index.html');
    }
});

// POPUP BOITIER open by clic
let openBoitierBtn = document.getElementById('openBoitierBtn');
let popupBoitier = document.getElementById('popupBoitier');
openBoitierBtn.addEventListener('click', function () {

    if (gameHanoiIsDone) {

        popupBoitier.classList.remove('hidden');
        // LOAD GAME:
        /* boitierScreen.innerHTML = '<object width="1920" height="1080" type="text/html" data="Games/Cables/cables.html" ></object>'; */
        jQuery('#gameScreenBoitier').load('/Games/Cables/cables.html');
    }
});



/******************************* CLOSE BUTTONS **********************************/

/********************************************************************************/
/* CLOSE BTN VUE AFFICHE */
let closeVueAfficheBtn = document.querySelector('.closeVueAfficheBtn');
closeVueAfficheBtn.addEventListener('click', function () {
    vueAffiche.classList.add('hidden');
});
/* CLOSE BTN POPUP AFFICHE */
let closePopupAfficheBtn = document.querySelector('.closePopUpAfficheBtn');
closePopupAfficheBtn.addEventListener('click', function () {
    popupPuzzle.classList.add('hidden');
});

/********************************************************************************/
/* CLOSE BTN VUE SNAKE */
let closeVueSnakeBtn = document.querySelector('.closeVueSnakeBtn');
closeVueSnakeBtn.addEventListener('click', function () {
    vueSnake.classList.add('hidden');
});
/* CLOSE BTN POPUP SNAKE */
let closePopupSnakeBtn = document.querySelector('.closePopUpSnakeBtn');
closePopupSnakeBtn.addEventListener('click', function () {
    popupSnake.classList.add('hidden');
});

/********************************************************************************/
/* CLOSE BTN VUE COFFRES */
let closeVueCoffresBtn = document.querySelector('.closeVueCoffresBtn');
closeVueCoffresBtn.addEventListener('click', function () {
    vueCoffres.classList.add('hidden');
});
/* CLOSE BTN POPUP HANOI */
let closePopupHanoiBtn = document.querySelector('.closePopUpHanoiBtn');
closePopupHanoiBtn.addEventListener('click', function () {
    popupHanoi.classList.add('hidden');
});

/********************************************************************************/
/* CLOSE BTN VUE BOITIER */
let closeVueBoitierBtn = document.querySelector('.closeVueBoitierBtn');
closeVueBoitierBtn.addEventListener('click', function () {
    vueBoitier.classList.add('hidden');
});
/* CLOSE BTN POPUP BOITIER */
let closePopupBoitierBtn = document.querySelector('.closePopUpBoitierBtn');
closePopupBoitierBtn.addEventListener('click', function () {
    popupBoitier.classList.add('hidden');
    vueBoitier.classList.add('hidden');
    document.getElementById('doorOpening').classList.remove('hidden');

});





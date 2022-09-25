var gameSnakeIsDone = true;
var gamePuzzleIsDone = false;
var gameHanoiIsDone = false;
var gameBoiteIsDone = false;

var timeGame = 0;




/* Intro */

function animIntroSynopsis() {
    document.getElementById('screenIntro').classList.add('hidden');
}
function turnOfftheLightAndStartGame() {
    document.querySelector(':root').classList.add("lumiere");
    document.getElementById("text-indice").innerHTML = "Pour y voir plus clair, <br> commencez par chercher la lumière.";
}

setTimeout(animIntroSynopsis, 20000);
setTimeout(turnOfftheLightAndStartGame, 20000);
/* Fin Intro */


/**************************************** OPEN VUES ***************************************/

// VUE AFFICHE open by clic
let zoomAffiche = document.getElementById('zoomAfficheBtn');
let vueAffiche = document.getElementById('vueAffiche');
zoomAffiche.addEventListener('click', function () {
    document.getElementById("narration").style.zIndex = "0";
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
    document.getElementById("text-indice").innerHTML = "Utilsez votre clavier.<br>Atteignez 50 fois la cible";
});

// POPUP PUZZLE open by clic
let openPuzzleBtn = document.getElementById('openPuzzleBtn');
let popupPuzzle = document.getElementById('popupPuzzle');
openPuzzleBtn.addEventListener('click', function () {
    if (gameSnakeIsDone) {
        document.getElementById("text-indice").innerHTML = "Remettez le puzzle en ordre<br>pour y placer la pièce manquante ";
    }

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
        document.getElementById("text-indice").innerHTML = "Ma patience a des limites. <br>Terminez l'épreuve de la tour d'Hanoï où c'en est fini pour vous."
        setTimeout(() => {
            document.getElementById("text-indice").innerHTML = "Déplacez les 5 anneaux sur la tige de droite.<br>Un anneau ne peut se placer que sur un autre anneau plus grand."
        }, 20000);



        // LOAD GAME:
        hanoiScreen.innerHTML = '<object width="1920" height="1080" type="text/html" data="/Games/Hanoi/index_copy.html" ></object>';
        /* jQuery('#gameScreenHanoi').load('/Games/Hanoi/index.html'); */
    }
});

// POPUP BOITIER open by clic
let openBoitierBtn = document.getElementById('openBoitierBtn');
let popupBoitier = document.getElementById('popupBoitier');
openBoitierBtn.addEventListener('click', function () {

    if (gameHanoiIsDone) {

        popupBoitier.classList.remove('hidden');
        document.getElementById("narration").style.zIndex = "80";
        document.getElementById("text-narration").innerHTML = "Vous avez fait le plus dur. Maintenant, rétablissez l'alimentation éléctrique de la porte."
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
    document.getElementById("narration").style.zIndex = "0";

});
/* CLOSE BTN POPUP AFFICHE */
let closePopupAfficheBtn = document.querySelector('.closePopUpAfficheBtn');
closePopupAfficheBtn.addEventListener('click', function () {
    popupPuzzle.classList.add('hidden');
    puzzleScreen.classList.add('hidden');
    openPuzzleBtn.classList.add('hidden');
    document.getElementById("text-indice").innerHTML = "Je ne serai pas toujours là pour vous aider.<br>Continuez d'explorer la pièce.";

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
    openSnakeBtn.classList.add('hidden');
    snakeScreen.classList.add('hidden');
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
    openHanoiBtn.classList.add('hidden');
    gameHanoiIsDone = true;
    hanoiScreen.classList.add('hidden');
    document.getElementById("text-indice").innerHTML = "Vous êtes sur le bon chemin.<br>Vous avez maintenant accès au boitier d'alimentation de la porte.";
    document.getElementById("text-narration").innerHTML = "Vous avez terminé la tour d'Hanoï. Quelque chose semble s'être débloqué.";
});

/********************************************************************************/
/* CLOSE BTN VUE BOITIER */
let closeVueBoitierBtn = document.querySelector('.closeVueBoitierBtn');
closeVueBoitierBtn.addEventListener('click', function () {
    vueBoitier.classList.add('hidden');
    boitierScreen.classList.add('hidden');
});


/* CLOSE BTN POPUP BOITIER */ /* --> OUVERTURE PORTE */ /* --> Page Win */
let closePopupBoitierBtn = document.querySelector('.closePopUpBoitierBtn');
closePopupBoitierBtn.addEventListener('click', function () {
    popupBoitier.classList.add('hidden');
    vueBoitier.classList.add('hidden');
    document.getElementById('doorOpening').classList.remove('hidden');

    setTimeout(loadWinPage, 2850);

    function loadWinPage() {
        let finalTime = 1800 - timeGame;


        fetch('/game/saveresult', { method: 'POST', body: JSON.stringify({ "time": finalTime }) }).then(function (headers) {
            return headers.json();
        }).then(function (body) {
            if (body.result == "ok") {
                document.location.href = "/game/win"
            }
        })
    }


});





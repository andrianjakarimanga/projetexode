



/************* Fonction swapBloc pour échanger deux blocs : ************/

function swapBlocks(cell1, cell2) {

    // Dans une variable temporaire, on place le premier bloc : x = a
    let x = document.getElementById(cell1).className;

    // On déclare que le premier bloc est égal au second : a = b
    document.getElementById(cell1).className = document.getElementById(cell2).className;

    // Et donc finalement x vaut b !
    document.getElementById(cell2).className = x;
}


/* Fonction clickBlock pour :
 -> Localiser la  cellule cliquée, 
-> Localiser la cellule vide, 
-> Et échanger les deux blocs : */

function clickBlock(row, column) {

    let cell = document.getElementById("cell" + row + column);
    let block = cell.className;

    if (block != "block9") { // Si le joueur clique sur une cellule qui contient un bloc du puzzle

        if (column < 3) { // Si la cellule cliquée est sur la colone 1 ou sur la colonne 2

            // Et si le bloc vide est à droite (column + 1)
            if (document.getElementById("cell" + row + (column + 1)).className == "block9") {

                // swap le bloc cliqué à droite sur column+1
                swapBlocks("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }

        // Si clic sur col 2 ou 3
        if (column > 1) {
            // Si empty bloc à gauche
            if (document.getElementById("cell" + row + (column - 1)).className == "block9") {
                // swap le bloc cliqué sur col-1
                swapBlocks("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }

        // SI click sur ligne 2 ou 3
        if (row > 1) {
            // Si empty bloc en haut
            if (document.getElementById("cell" + (row - 1) + column).className == "block9") {
                swapBlocks("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }

        // Sur ligne 1 ou 2
        if (row < 3) {
            // Si empty bloc en bas
            if (document.getElementById("cell" + (row + 1) + column).className == "block9") {
                swapBlocks("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}


function shuffle() {
    // Parcours la grille, lignes puis colones
    for (let row = 1; row <= 3; row++) {
        for (let column = 1; column <= 3; column++) {

            let row2 = Math.floor(Math.random() * 3 + 1); // Choisis une ligne random de 1 à 3
            let column2 = Math.floor(Math.random() * 3 + 1); // Choisis une colone au hasard

            swapBlocks("cell" + row + column, "cell" + row2 + column2); // échange les blocs 

            let element = document.querySelector(".block9");
            element.classList.remove("solved"); // remet le bloc vide
        }
    }

}



/* let btn = document.querySelector('button');
btn.addEventListener('click', shuffle); */


// Victoire si chaque bloc est dans sa bonne cellule :
function isSolved() {
    if (cell11.className == 'block1' &&
        cell12.className == 'block2' &&
        cell13.className == 'block3' &&
        cell21.className == 'block4' &&
        cell22.className == 'block5' &&
        cell23.className == 'block6' &&
        cell31.className == 'block7' &&
        cell32.className == 'block8' &&
        cell33.className == 'block9') {

        // Apparition du bloc manquant dans la cellule vide :
        let element = document.getElementById("cell33");
        element.classList.add("solved");


        if (element.classList.contains('solved')) {
            /* setTimeout("alert('bravo!'); ", 1200) */


            document.getElementById("text-indice").innerHTML = "Je ne peux pas vous aider.<br>Continuez d'explorer la pièce.";
            document.getElementById("text-narration").innerHTML = "Vous avez du talent... mais le temps presse.<br>Continuez d'explorer la pièce.";


            document.getElementById("narration").style.zIndex = "80";
            // Active le bouton qui permet de fermer la popup du puzzle
            document.querySelector('.closePopUpAfficheBtn').classList.remove('hidden');

            gamePuzzleIsDone = true; // Active l'énigme suivante
        }
    }
}

function game() {

    // Le puzzle apparait dans l'ordre puis se mélange au bout de 500ms :
    setTimeout(() => {
        // Après 500ms, mélange toutes les 100ms
        let timerId = setInterval(() => shuffle(), 100);

        // Arrête après 1200ms
        setTimeout(() => { clearInterval(timerId); shuffle(); }, 1000);
    }, "500")

    // A chaque clic du joueur la fonction clickBloc accompli sa mission :
    document.getElementById('cell11').addEventListener('click', function () { clickBlock(1, 1); });
    document.getElementById('cell12').addEventListener('click', function () { clickBlock(1, 2); });
    document.getElementById('cell13').addEventListener('click', function () { clickBlock(1, 3); });
    document.getElementById('cell21').addEventListener('click', function () { clickBlock(2, 1); });
    document.getElementById('cell22').addEventListener('click', function () { clickBlock(2, 2); });
    document.getElementById('cell23').addEventListener('click', function () { clickBlock(2, 3); });
    document.getElementById('cell31').addEventListener('click', function () { clickBlock(3, 1); });
    document.getElementById('cell32').addEventListener('click', function () { clickBlock(3, 2); });
    document.getElementById('cell33').addEventListener('click', function () { clickBlock(3, 3); });

    setTimeout(() => {
        isSolved(); //  A chaque bloc déplacé, check si c'est gagné ou non 
    }, "1000")
}
game();
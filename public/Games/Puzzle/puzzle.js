function swapBlocks(cell1, cell2) {
    let x = document.getElementById(cell1).className; // x = a;
    document.getElementById(cell1).className = document.getElementById(cell2).className; // a = b;
    document.getElementById(cell2).className = x; // b = x;


}


function clickBlock(row, column) {

    let cell = document.getElementById("cell" + row + column);
    let block = cell.className;

    if (block != "block9") {

        // Si click sur col 1 et 2
        if (column < 3) {
            // Si empty bloc est à droite
            if (document.getElementById("cell" + row + (column + 1)).className == "block9") {

                // swap le bloc cliqué sur column+1
                swapBlocks("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }

        // Si click sur col 2 et 3
        if (column > 1) {
            // Si empty bloc à gauche
            if (document.getElementById("cell" + row + (column - 1)).className == "block9") {
                // swap le bloc cliqué sur col-1
                swapBlocks("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }

        // SI click sur ligne 2 et 3
        if (row > 1) {
            // Si empty bloc en haut
            if (document.getElementById("cell" + (row - 1) + column).className == "block9") {
                swapBlocks("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }

        // Sur ligne 1 et 2
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


// Victoire si
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

        let element = document.getElementById("cell33");
        element.classList.add("solved");


        if (element.classList.contains('solved')) {
            setTimeout("alert('bravo!'); ", 1200)
            gamePuzzleIsDone = true;
        }
    }


}


function game() {


    /* setTimeout(() => {
        // Après 500ms, mélange toutes les 100ms
        let timerId = setInterval(() => shuffle(), 100);

        // Arrête après 1200ms
        setTimeout(() => { clearInterval(timerId); shuffle(); }, 1000);
    }, "500") */




    // Click Events
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
        isSolved(); //  A chaque bloc déplacé, check si c'est gagné
    }, "1000")

}

game();
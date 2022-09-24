
let COLONNES = 30; // 30 carrés par collonnes
let LIGNES = 30; // 30 carrés par lignes
let SQUARE = 20; // nbr de px par carré

let screen = document.getElementById("screen");
let ctx = screen.getContext("2d"); // context canvas

screen.width = COLONNES * SQUARE; // Dimensions
screen.height = LIGNES * SQUARE;

ctx.fillStyle = "#c6e2ff"; // Couleur



let snake = [[0, 0]]; // Tableau des positions des carrés du serpent. Tête en début de tableau

let target; //Position de la cible

let snakeX = 1; // direction initiale du serpent, vers la droite
let snakeY = 0;

tour = 0;

/* MÀJ DE L'ÉCRAN */
function majScreen() {
  /* Efface l'écran */
  ctx.clearRect(0, 0, screen.width, screen.height);

  /* Affiche les carrés du Snake, en blanc */
  ctx.shadowColor = '#c6e2ff';
  ctx.shadowBlur = 15;
  ctx.fillStyle = "#c6e2ff";
  for (let i = 0, l = snake.length; i < l; i++) {
    ctx.fillRect(snake[i][0] * SQUARE, snake[i][1] * SQUARE, SQUARE, SQUARE);
  }

  /* Affiche la cible, en rouge */
  ctx.shadowColor = '#ff0331';
  ctx.shadowBlur = 25;
  ctx.fillStyle = "#ff0331";
  ctx.fillRect(target[0] * SQUARE, target[1] * SQUARE, SQUARE, SQUARE);
}


/* BOUCLE DU JEU */

function game() {
  if (snakeMoove()) {
    majScreen();
    console.log(tour, denom)

    if (tour > 3) {
      tour = 0;

      clearInterval(intervalID);
      denom = denom + 1;
      vitesse = 900 / denom;
      intervalID = setInterval(game, vitesse);
    }
  }

  else {
    gameOver();
  }
}



/* POSITION RANDOM DE LA CIBLE */
function placeTarget() {
  target = [
    1 + Math.floor((COLONNES - 2) * Math.random()),
    1 + Math.floor((LIGNES - 2) * Math.random()),
  ];
}


/* GESTION DU SNAKE */

function snakeMoove() {
  let tete = [snake[0][0] + snakeX, snake[0][1] + snakeY];

  // Si snake sort du cadre, return false
  if (
    tete[0] == -1 ||
    tete[0] == COLONNES ||
    tete[1] == -1 ||
    tete[1] == LIGNES
  )
    return false;



  // Test si le snake se mord :
  // Si positions du serpent = nouvelle position de la tête, return false
  for (let i = 0, l = snake.length - 1; i < l; i++) {
    if (tete[0] == snake[i][0] && tete[1] == snake[i][1]) {
      return false;
    }
  }

  // Si position tête = position de la cible, alors place une nouvelle cible et maj le score
  if (tete[0] == target[0] && tete[1] == target[1]) {

    tour++;
    placeTarget();
    majScore(50 - snake.length);
  } else {
    snake.pop(); // sinon supprime le dernier élément du tableau snake, pour qu'il ne grandisse pas
  }

  // Ajoute la nouvelle position de latête au début du tableau snake:
  snake.unshift(tete);
  return true;
}



/* MAJ DU SCORE */
let score = document.getElementById("score");
function majScore(s) {
  score.innerHTML = s;

  checkIfWin()
}
/* VICTOIRE ? */
function checkIfWin() {
  let puzzle = document.getElementById("hiddenPuzzle");
  let screen = document.getElementById("screen");

  if (snake.length == 2) {

    puzzle.classList.add("puzzleReveal");
    puzzle.style.display = "block";
    screen.style.display = "none";

    document.getElementById("textScore").innerHTML = "";
    document.getElementById("text-indice").innerHTML = "Aucun indice disponible. Continuez d'explorer la pièce.";
    document.getElementById("text-narration").innerHTML = "Vous avez trouvé la pièce manquante d'un puzzle. <br> Continuez d'explorer la pièce.";
    document.querySelector('.closePopUpSnakeBtn').classList.remove('hidden'); // Active le bouton pour fermer le jeu
    document.getElementById("narration").style.zIndex = "50";
    /* ctx.clearRect(0, 0, screen.width, screen.height); */
    gameSnakeIsDone = true;
  }



}

function revealPuzzle() {
  if (snake.length == 50) {


    alert('Bravo!')
  }
}


/* START BTN ET GAME OVER */
let startGameBtn = document.getElementById("start");
let gameScreen = document.getElementById("screen");
let newGameBtn = document.getElementById("gameOver");

function startGame() {
  startGameBtn.style.display = "none";

  gameScreen.style.opacity = "100%";
  newGameBtn.style.display = "none";


  placeTarget();

  denom = 9;
  vitesse = 900 / denom;
  intervalID = setInterval(game, vitesse);
}

function gameOver() {
  clearInterval(intervalID);
  startGameBtn.style.display = "none";
  /* gameScreen.style.opacity = "20%";
  newGameBtn.style.display = "block"; */


  snake = [[0, 0]]; // Tableau des positions des carrés du serpent. Tête en début de tableau

  snakeX = 1; // direction initiale du serpent, vers la droite
  snakeY = 0;
  tour = 0;

  majScore(50);
  startGame();



  /* setInterval(() => {
    location.reload();
  }, 2200); */
}


/* GESTION DES TOUCHES */

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case " ":
      if (startGameBtn.style.display == "block") {
        startGame();
      }
      break;
    case "ArrowUp": //Haut
      if (snakeY == 0) {
        snakeX = 0;
        snakeY = -1;
      }
      break;
    case "ArrowDown": //Bas
      if (snakeY == 0) {
        snakeX = 0;
        snakeY = 1;
      }
      break;
    case "ArrowLeft": //Gauche
      if (snakeX == 0) {
        snakeX = -1;
        snakeY = 0;
      }
      break;
    case "ArrowRight": //Droite
      if (snakeX == 0) {
        snakeX = 1;
        snakeY = 0;
      }
      break;
  }
});

startGameBtn.addEventListener("click", startGame);



/* CHRONO */

/* setTimeout(alert("vous avez 3000 minute pour sortir de la pièce..."), 50000) */
/* alert("vous avez 30 minute pour sortir de la pièce...") */


// const pour le depart avec 30 min //
const departMinutes = 0.1;

let temps = departMinutes * 18000;

const timerElement = document.getElementById("minuteur");

/* function son() {
    document.getElementById("sonChrono").play()
}
function stopSon() {
    document.getElementById("sonChrono").pause()
} */

setTimeout(timer, 20000);
/* timer(); */

function timer() {


    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${minutes}:${secondes} `

    temps = temps - 1
    /* document.getElementById("sonChrono").currentTime = 0 */


    timeGame = temps;
    console.log(temps);

    if (temps > (-1)) {
        setTimeout(function () { timer(); }, 1000);
    } else {
        /* stopSon(); */
        alert('vous avez perdu');
    }
}

/* fin chrono */
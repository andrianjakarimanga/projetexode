function update(element) {
  var x = element.clientX
  var y = element.clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)







const btn = document.getElementById("toggleLight");

btn.addEventListener("click", function () {
  lumiereToggle();
  if (lumiere) {
    document.getElementById("zoomSnakeBtn").classList.remove('hidden');
    document.getElementById("zoomBoitierBtn").classList.remove('hidden');
    document.getElementById("zoomAfficheBtn").classList.remove('hidden');
    document.getElementById("zoomCoffresBtn").classList.remove('hidden');
  } else {
    document.getElementById("zoomSnakeBtn").classList.add('hidden');
    document.getElementById("zoomBoitierBtn").classList.add('hidden');
    document.getElementById("zoomAfficheBtn").classList.add('hidden');
    document.getElementById("zoomCoffresBtn").classList.add('hidden');

  }

});

function lumiereToggle() {
  /* alert('cc') */

  if (document.querySelector(':root').classList.contains("lumiere")) {
    document.querySelector(':root').classList.remove("lumiere");
    lumiere = true
    document.getElementById("text-indice").innerHTML = "Aucun indice disponible.<br>Continuez d'explorer la pièce.";

  } else {
    document.querySelector(':root').classList.add("lumiere");
    lumiere = false
  }


  /*  if (lumiere == false) {
     lumiere == true
   } else {
     lumiere == false
   } */
  /* document.querySelector("zoom").classList.remove('hidden'); */
}


let lumiere = false;
/* lumiereToggle(); */
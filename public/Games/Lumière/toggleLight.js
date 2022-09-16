function update(element) {
  var x = element.clientX || e.touches[0].clientX
  var y = element.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)
document.querySelector(':root').classList.add("lumiere");
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
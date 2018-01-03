function menuDeroulant(){
  var navBar = document.getElementsByTagName('nav')[0];
  if(navBar.style.display == 'block'){
    navBar.style.display = 'none';
  }
  else{
    navBar.style.display = 'block';
  }
}

// Fonction exécutée au redimensionnement
function redimensionnement() {
  var navBar = document.getElementsByTagName('nav')[0];
  var RSnavBar = document.getElementById('reseauxSociaux');

  if("matchMedia" in window) { // Détection
    // Mobile
    if(window.matchMedia("(min-width:950px)").matches) {
      navBar.style.display = 'block';
    } else {
      navBar.style.display = 'none';
    }
  }
}

// On lie l'événement resize à la fonction
window.addEventListener('resize', redimensionnement, false);

/* Carte Interactive SVG */

function showBretagne(){
  var carteFrance = document.getElementById('franceCarte');
  var carteBretagne = document.getElementById('bretagneCarte');
  carteFrance.style.display = 'none';
  carteBretagne.style.display = 'block';
}

function showFrance(){
  var carteFrance = document.getElementById('franceCarte');
  var carteBretagne = document.getElementById('bretagneCarte');
  carteBretagne.style.display = 'none';
  carteFrance.style.display = 'block';
}

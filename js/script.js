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

  /*var parallax = document.getElementsByClassName('parallax');*/

  // Gestion du menu
  if("matchMedia" in window) { // Détection
    // Mobile
    if(window.matchMedia("(min-width:950px)").matches) {
      navBar.style.display = 'block';
    } else {
      navBar.style.display = 'none';
    }
  }
  /*
  // Gestion de la parallaxe
  for (var i = 0; i < parallax.length; i++)
    parallax[i].style.backgroundPosition = '0px 0px';
  */
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

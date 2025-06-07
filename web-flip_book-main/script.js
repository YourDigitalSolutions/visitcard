/*********************
* RESPONSIVE WARNING *
*********************/

const responsiveWarning = document.getElementById("responsive-warning");
const responsiveDesign = true; // <-- site responsive, pas de blocage.

if (!responsiveDesign && window.innerWidth <= 768 && responsiveWarning) {
  responsiveWarning.classList.add("show");
}

/***********************
* MODE TOGGLE BEHAVIOR *
***********************/

const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

// Fonction pour appliquer le mode (light ou dark)
function applyMode(mode) {
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(mode);

  if (toggleModeBtn) {
    if (mode === "dark-mode") {
      toggleModeBtn.style.color = "rgb(245, 245, 245)";
      toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      toggleModeBtn.style.color = "rgb(2, 4, 8)";
      toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
  }

  if (portfolioLink) {
    portfolioLink.style.color = mode === "dark-mode" ? "rgb(245, 245, 245)" : "rgb(2, 4, 8)";
  }

  if (responsiveWarning) {
    responsiveWarning.style.backgroundColor = mode === "dark-mode" ? "rgb(2, 4, 8)" : "rgb(245, 245, 245)";
  }
}

// Récupère le mode sauvegardé, ou mode par défaut
let savedMode = localStorage.getItem("mode");
if (savedMode === null) {
  savedMode = "light-mode";
}
applyMode(savedMode);

// Ajout écouteur pour le bouton toggle mode
if (toggleModeBtn) {
  toggleModeBtn.addEventListener("click", function () {
    let newMode = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
    applyMode(newMode);
    localStorage.setItem("mode", newMode);
  });
}

/**************************************
* ADAPTER LE FLIP BOOK POUR MOBILE *
**************************************/

function adjustFlipBookZoom() {
  const flipBook = document.getElementById("flip_book");
  if (!flipBook) return;

  if (window.innerWidth <= 768) {
    flipBook.style.transformOrigin = "top center";
    flipBook.style.transform = "scale(2)";
  } else {
    flipBook.style.transform = "none";
  }
}

// Appliquer au chargement
window.addEventListener("load", adjustFlipBookZoom);
// Appliquer au redimensionnement
window.addEventListener("resize", adjustFlipBookZoom);

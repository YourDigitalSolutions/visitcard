/*********************
* RESPONSIVE WARNING *
*********************/

const responsiveWarning = document.getElementById("responsive-warning");
const responsiveDesign = true;

if (!responsiveDesign && window.innerWidth <= 768 && responsiveWarning) {
  responsiveWarning.classList.add("show");
}

/***********************
* MODE TOGGLE BEHAVIOR *
***********************/

const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

function applyMode(mode) {
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(mode);

  if (toggleModeBtn) {
    toggleModeBtn.style.color = mode === "dark-mode" ? "rgb(245, 245, 245)" : "rgb(2, 4, 8)";
    toggleModeBtn.innerHTML =
      mode === "dark-mode"
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-stars-fill"></i>';
  }

  if (portfolioLink) {
    portfolioLink.style.color = mode === "dark-mode" ? "rgb(245, 245, 245)" : "rgb(2, 4, 8)";
  }

  if (responsiveWarning) {
    responsiveWarning.style.backgroundColor = mode === "dark-mode" ? "rgb(2, 4, 8)" : "rgb(245, 245, 245)";
  }
}

let savedMode = localStorage.getItem("mode");
if (savedMode === null) savedMode = "light-mode";
applyMode(savedMode);

if (toggleModeBtn) {
  toggleModeBtn.addEventListener("click", function () {
    const newMode = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
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
    flipBook.style.transformOrigin = "top rigth";
    flipBook.style.transform = "scale(0.6)";
    flipBook.style.marginRight = "10px"; // Décale un peu vers la droite
  } else {
    flipBook.style.transform = "none";
    flipBook.style.marginRight = "auto";
  }
}

window.addEventListener("load", adjustFlipBookZoom);
window.addEventListener("resize", adjustFlipBookZoom);

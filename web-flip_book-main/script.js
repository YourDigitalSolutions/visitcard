/*********************
* RESPONSIVE WARNING *
*********************/

const responsiveWarning = document.getElementById("responsive-warning");
const responsiveDesign = true; // <-- ici on dit que le site est responsive, donc pas de blocage.

if (!responsiveDesign && window.innerWidth <= 768 && responsiveWarning) {
  responsiveWarning.classList.add("show");
}


/***********************
* MODE TOGGLE BEHAVIOR *
***********************/

// Get elements that change with the mode.
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

// Function to apply mode.
function applyMode(mode) {
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(mode);

  if (mode === "dark-mode") {
    // Set dark mode styles.
    toggleModeBtn.style.color = "rgb(245, 245, 245)";
    toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

    if (portfolioLink) portfolioLink.style.color = "rgb(245, 245, 245)";

    if (responsiveWarning) responsiveWarning.style.backgroundColor = "rgb(2, 4, 8)";
  } else {
    // Set light mode styles.
    toggleModeBtn.style.color = "rgb(2, 4, 8)";
    toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';

    if (portfolioLink) portfolioLink.style.color = "rgb(2, 4, 8)";

    if (responsiveWarning) responsiveWarning.style.backgroundColor = "rgb(245, 245, 245)";
  }
}

// Check and apply saved mode on page load
let savedMode = localStorage.getItem("mode");

if (savedMode === null) {
  savedMode = "light-mode"; // Default mode.
}
applyMode(savedMode);

// Toggle mode and save preference.
toggleModeBtn.addEventListener("click", function () {
  let newMode;

  if (body.classList.contains("light-mode")) {
    newMode = "dark-mode";
  } else {
    newMode = "light-mode";
  }

  applyMode(newMode);

  // Save choice.
  localStorage.setItem("mode", newMode);
});


/*****************************
* FLIP BOOK ZOOM + POSITION *
*****************************/

// Adjust flip book zoom and horizontal position on resize and load
function adjustFlipBookZoom() {
  const flipBook = document.getElementById("flip_book");
  if (!flipBook) return;

  if (window.innerWidth <= 768) {
    flipBook.style.transformOrigin = "top center";
    flipBook.style.transform = "scale(0.7) translateX(30%)";
  } else {
    flipBook.style.transform = "none";
  }
}

// Run on load and when resizing window
window.addEventListener("load", adjustFlipBookZoom);
window.addEventListener("resize", adjustFlipBookZoom);

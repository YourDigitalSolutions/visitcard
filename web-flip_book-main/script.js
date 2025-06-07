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

  if (mode === "dark-mode") {
    toggleModeBtn.style.color = "rgb(245, 245, 245)";
    toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    if (portfolioLink) portfolioLink.style.color = "rgb(245, 245, 245)";
    if (responsiveWarning) responsiveWarning.style.backgroundColor = "rgb(2, 4, 8)";
  } else {
    toggleModeBtn.style.color = "rgb(2, 4, 8)";
    toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    if (portfolioLink) portfolioLink.style.color = "rgb(2, 4, 8)";
    if (responsiveWarning) responsiveWarning.style.backgroundColor = "rgb(245, 245, 245)";
  }
}

let savedMode = localStorage.getItem("mode") || "light-mode";
applyMode(savedMode);

toggleModeBtn.addEventListener("click", () => {
  const newMode = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
  applyMode(newMode);
  localStorage.setItem("mode", newMode);
});

/*****************************
* FLIP BOOK ZOOM MOBILE ONLY *
*****************************/

function wrapFlipBook() {
  const flipBook = document.getElementById("flip_book");
  if (!flipBook) return null;

  let wrapper = document.getElementById("flip_book_wrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "flip_book_wrapper";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.alignItems = "center";
    wrapper.style.width = "100%";
    wrapper.style.overflow = "hidden";
    wrapper.style.transition = "transform 0.3s ease";

    flipBook.parentNode.insertBefore(wrapper, flipBook);
    wrapper.appendChild(flipBook);
  }
  return wrapper;
}

function updateFlipBookZoom() {
  const wrapper = wrapFlipBook();
  if (!wrapper) return;

  if (window.innerWidth <= 768) {
    wrapper.style.transform = "scale(0.7)";
  } else {
    wrapper.style.transform = "scale(1)";
  }
}

window.addEventListener("load", updateFlipBookZoom);
window.addEventListener("resize", updateFlipBookZoom);

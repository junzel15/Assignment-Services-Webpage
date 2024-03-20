const toggleOpen = document.getElementById("toggleopen");
const toggleClose = document.getElementById("toggleclose");
const menuaccCon = document.getElementById("menuacccontainer");
const iconOpen = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-close");
const menuCon = document.getElementById("menucontainer");

// Function to open menu
function openMenu() {
  menuaccCon.style.opacity = "1";
  menuaccCon.style.height = "100vh";
}

// Function to close menu
function closeMenu() {
  menuaccCon.style.opacity = "0";
  menuaccCon.style.height = "0";
}

// Event listeners

menuCon.addEventListener("click", () => {
  closeMenu();
});

toggleOpen.addEventListener("click", () => {
  openMenu();
});

toggleClose.addEventListener("click", () => {
  closeMenu();
});

// Function to handle resize event
function handleResize() {
  const mq = window.matchMedia("(min-width: 769px)");

  if (mq.matches) {
    // Apply styles when window width is at least 769px
    openMenu();
  } else {
    // Apply styles when window width is less than 769px
    closeMenu();
  }
}

// Event listener for window resize
window.addEventListener("resize", handleResize);

// Initialize menu state based on window width
handleResize();

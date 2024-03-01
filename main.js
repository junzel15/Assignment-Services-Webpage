const toggleOpen = document.getElementById("toggleopen");
const toggleClose = document.getElementById("toggleclose");
const menuaccCon = document.getElementById("menuacccontainer");
const iconOpen = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-close");
const menuCon = document.getElementById("menucontainer");

menuCon.addEventListener("click", () => {
  menuaccCon.style.opacity = "0";
  menuaccCon.style.height = "0";
});

toggleOpen.addEventListener("click", () => {
  menuaccCon.style.opacity = "1";
  menuaccCon.style.height = "100vh";
});

toggleClose.addEventListener("click", () => {
  menuaccCon.style.opacity = "0";
  menuaccCon.style.height = "0";
});

window.addEventListener("resize", () => {
  const mq = window.matchMedia("(min-width: 769px)");

  if (mq.matches) {
    // window width is at least 500px
    console.log("Higher 769");
    menuaccCon.style.opacity = "1";
  }
});

// menuaccCon.style.opacity = "1"
// menuaccCon.style.height = "100vh"

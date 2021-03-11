let hamMenu = document.getElementById("hamMenu");
let hamMenuBtn = document.getElementById("hamMenuIcon");
let mainBody = document.getElementById("mainBody");
let footerBody = document.getElementById("footerBody");

hamMenuBtn.addEventListener("click", expandMenu);

function expandMenu() {
  if (hamMenu.style.display == "none" || hamMenu.style.display == "" ) {
    hamMenu.style.display = "grid";
    mainBody.style.opacity = "0.5";
    footerBody.style.opacity = "0.5";
  } else {
    hamMenu.style.display = "none";
    mainBody.style.opacity = "1";
    footerBody.style.opacity = "1";
  }
}

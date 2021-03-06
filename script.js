let hamMenuBtn = document.getElementById('hamMenuIcon');
let hamMenu = document.getElementById('hamMenu');

hamMenuBtn.addEventListener('click', expandMenu);


function expandMenu() {
    hamMenu.classList.toggle("openMenu");
    hamMenuBtn.classList.toggle("closeMenu");

}

/* document.addEventListener('click', closeMenu);

function closeMenu() {
    if (hamMenu.style.display = "grid") {
        hamMenu.style.display = "none"
    }
      
        } 
 */

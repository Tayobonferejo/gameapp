
const main = document.getElementById("main")

let change = true

main.addEventListener("click", (event) => {
    const cross = event.target;



     // make sure only cells are clickable
    if (cross.parentElement !== main) return;


    // stop if cell already has an icon
    if (cross.children.length > 0) return;

    const gameIcon = document.createElement("i");


    if (change) {
        gameIcon.classList.add("fa-solid", "fa-x");
        change = false;
    } else {
        gameIcon.classList.add("fa-solid", "fa-circle");
        change = true;
    }

    cross.appendChild(gameIcon);

});
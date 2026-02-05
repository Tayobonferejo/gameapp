

const main = document.getElementById("main")

let change = true

main.addEventListener("click", (event) => {
    const cross = event.target;
    const crust = event.currentTarget;





        if(change)
        {
            
            const gameIcon = document.createElement("i");
            gameIcon.classList.add("fa-solid", "fa-x");
            cross.appendChild(gameIcon);
            console.dir(cross.childNodes);
            change = false;
        }

        else {

            const gameIcon = document.createElement("i");
            gameIcon.classList.add("fa-solid", "fa-0");
            cross.appendChild(gameIcon);
            console.dir(cross.childNodes);
            change = true;
        }

})
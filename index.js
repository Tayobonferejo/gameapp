

const main = document.getElementById("main")

let change = true

main.addEventListener("click", (event) => {
    const cross = event.target;

    if(change)
    {
        cross.innerHTML = `<i class="fa-solid fa-x"></i>`
        change = false;
    }

    else {
        cross.innerHTML = `<i class="fa-solid fa-0"></i>`
        change = true;
    }
})
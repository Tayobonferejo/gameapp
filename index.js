
const main = document.getElementById("main")

let xChoices = [];
let oChoices = [];
let change = true;
let count = 0;
const firstPlayer = "X";
const secondPlayer = "O";

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
        count = count + 1;
        xChoices.push([...main.children].indexOf(cross));

        winningLogic(xChoices, firstPlayer);

        console.log("x chooses:", xChoices);
    } else {
        gameIcon.classList.add("fa-solid", "fa-circle");
        change = true;
        count = count + 1;
        oChoices.push([...main.children].indexOf(cross));

        winningLogic(oChoices, secondPlayer)
        console.log("o chooses:", oChoices);
    }


    cross.appendChild(gameIcon);

      if (count === 9) {
        setTimeout(() => alert("Game over"), 0.5);
      }

});


function winningLogic(player, winner) {

    if (
        player.includes(2) &&
        player.includes(5) &&
        player.includes(8)
      ) {
        alert(`Player ${winner} won`);

    }
    else if (
        player.includes(2) &&
        player.includes(4) &&
        player.includes(6))
        {
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(1) &&
        player.includes(2))
        {
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(3) &&
        player.includes(6))
        {
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(1) &&
        player.includes(4) &&
        player.includes(7))
        {
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(4) &&
        player.includes(8))
        {
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(3) &&
        player.includes(4) &&
        player.includes(5))
        {
          alert(`Player ${winner} won`);

    }

      else if (
        player.includes(6) &&
        player.includes(7) &&
        player.includes(8))
        {
          alert(`Player ${winner} won`);

    }

}


const main = document.getElementById("main")

let xChoices = [];
let oChoices = [];
let change = true;
let gameOver = false;
let count = 0;
const firstPlayer = "X";
const secondPlayer = "O";

main.addEventListener("click", handleClick)


function winningLogic(player, winner) {

  let won = false;

    if (
        player.includes(2) &&
        player.includes(5) &&
        player.includes(8)
      ) {
        won = true;
        alert(`Player ${winner} won`);

    }
    else if (
        player.includes(2) &&
        player.includes(4) &&
        player.includes(6))
        {
          won = true;
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(1) &&
        player.includes(2))
        {
          won = true;
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(3) &&
        player.includes(6))
        {
          won = true;
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(1) &&
        player.includes(4) &&
        player.includes(7))
        {
          won = true;
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(0) &&
        player.includes(4) &&
        player.includes(8))
        {
          won = true;
          alert(`Player ${winner} won`);

    }
      else if (
        player.includes(3) &&
        player.includes(4) &&
        player.includes(5))
        {
          won = true;
          alert(`Player ${winner} won`);

    }

      else if (
        player.includes(6) &&
        player.includes(7) &&
        player.includes(8))
        {
          won = true;
          alert(`Player ${winner} won`);

    }

    return won;

}


function handleClick(event) {

  if (gameOver) return;
     const cross = event.target.closest("div");

     if (!cross || cross === main) return;

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
        cross.appendChild(gameIcon);

         if (winningLogic(xChoices, firstPlayer)) {
            gameOver = true; 
            return;
        }

        console.log("x chooses:", xChoices);
    } else {
        gameIcon.classList.add("fa-solid", "fa-circle");
        change = true;
        count = count + 1;
        oChoices.push([...main.children].indexOf(cross));
        cross.appendChild(gameIcon);

        if (winningLogic(oChoices, secondPlayer)) {
            gameOver = true;   
            return;
        }
        console.log("o chooses:", oChoices);
    }


      if (count === 9 && !gameOver) {
        setTimeout(() => alert("Game over, the game is a draw"), 500);
        gameOver = true;
    }
}
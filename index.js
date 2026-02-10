
const main = document.getElementById("main");

const xWin = document.getElementById("xscore");
const bothDraw = document.getElementById("draw");
const oWin = document.getElementById("oscore");
const popUp = document.getElementById("popSection");
const noPermit = document.getElementById("noPermit");
const yesPermit = document.getElementById("yesPermit");

let xChoices = [];
let oChoices = [];
let xscore = 0;
let oscore = 0;
let draw = 0;
let change = true;
let gameOver = false;
let count = 0;
const firstPlayer = "X";
const secondPlayer = "O";

main.addEventListener("click", handleClick)


function winningLogic(player) {

  let won = false;

    if (
        player.includes(2) &&
        player.includes(5) &&
        player.includes(8)
      ) {
          won = true;
        }
    else if (
        player.includes(2) &&
        player.includes(4) &&
        player.includes(6))
        {
            won = true;

    }
      else if (
        player.includes(0) &&
        player.includes(1) &&
        player.includes(2))
        {
            won =true;

    }
      else if (
        player.includes(0) &&
        player.includes(3) &&
        player.includes(6))
        {
          won = true;
        }
      else if (
        player.includes(1) &&
        player.includes(4) &&
        player.includes(7))
        {
              won = true;
              
        }
      else if (
        player.includes(0) &&
        player.includes(4) &&
        player.includes(8))
        {
            won = true;
          
    }
      else if (
        player.includes(3) &&
        player.includes(4) &&
        player.includes(5))
        {
            won = true;
           
    }

      else if (
        player.includes(6) &&
        player.includes(7) &&
        player.includes(8))
        {
            won =  true;
        }

    return won;
}


function handleClick(event) {

  if (popUp.classList.contains("link-section")) return;

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
            winnerScore(firstPlayer);
            popUp.classList.add("link-section");
            xWin.textContent= `${xscore}`;
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
            winnerScore(secondPlayer);
            return;
        }
        console.log("o chooses:", oChoices);
    }


      if (count === 9 && !gameOver) {
        draw = draw + 1;
        bothDraw.textContent= `${draw}`;
        popUp.classList.add("link-section");
        gameOver = true;
    }
}

function winnerScore(winner) {
  if(winner === firstPlayer) {
      xscore = xscore + 1;
      xWin.textContent= `${xscore}`;
      popUp.classList.add("link-section");
    }
  else if (winner === secondPlayer)
    {
      oscore = oscore + 1;
      oWin.textContent= `${oscore}`;
      popUp.classList.add("link-section");
    }
  }

popUp.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();


    if (event.target.id === "yesPermit") {
        const icon = main.querySelectorAll("i");
        icon.forEach(icon => icon.remove());
        popUp.classList.remove("link-section");
        gameOver = false;
        change = true;
        playerX = [];
        playerO = [];
        xChoices = [];  
        oChoices = [];

        count = 0; 
    }

    if (event.target.id === "noPermit") {
        console.log("good");
    }
});
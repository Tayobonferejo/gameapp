
const main = document.getElementById("main")

let xChoices = [];
let oChoices = [];
let change = true;
let count = 0;

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

          if (
              xChoices.includes(2) &&
              xChoices.includes(5) &&
              xChoices.includes(8)
            ) {
              alert("X won");
          }
          else if (
              xChoices.includes(2) &&
              xChoices.includes(4) &&
              xChoices.includes(6))
              {
                alert("X won");
          }
           else if (
              xChoices.includes(0) &&
              xChoices.includes(1) &&
              xChoices.includes(2))
              {
                alert("X won");
          }
           else if (
              xChoices.includes(0) &&
              xChoices.includes(3) &&
              xChoices.includes(6))
              {
                alert("X won");
          }
            else if (
              xChoices.includes(1) &&
              xChoices.includes(4) &&
              xChoices.includes(7))
              {
                alert("X won");
          }
           else if (
              xChoices.includes(0) &&
              xChoices.includes(4) &&
              xChoices.includes(8))
              {
                alert("X won");
          }
           else if (
              xChoices.includes(3) &&
              xChoices.includes(4) &&
              xChoices.includes(5))
              {
                alert("X won");
          }

           else if (
              xChoices.includes(6) &&
              xChoices.includes(7) &&
              xChoices.includes(8))
              {
                alert("X won");
          }

        console.log("x chooses:", xChoices);
    } else {
        gameIcon.classList.add("fa-solid", "fa-circle");
        change = true;
        count = count + 1;
        oChoices.push([...main.children].indexOf(cross));

        if (
              oChoices.includes(2) &&
              oChoices.includes(5) &&
              oChoices.includes(8)
            ) {
              alert("O won");
          }
          else if (
              oChoices.includes(2) &&
              oChoices.includes(4) &&
              oChoices.includes(6))
              {
                alert("O won");
          }
           else if (
              oChoices.includes(0) &&
              oChoices.includes(1) &&
              oChoices.includes(2))
              {
                alert("O won");
          }
           else if (
              oChoices.includes(0) &&
              oChoices.includes(3) &&
              oChoices.includes(6))
              {
                alert("O won");
          }
            else if (
              oChoices.includes(1) &&
              oChoices.includes(4) &&
              oChoices.includes(7))
              {
                alert("O won");
          }
           else if (
              oChoices.includes(0) &&
              oChoices.includes(4) &&
              oChoices.includes(8))
              {
                alert("O won");
          }
           else if (
              oChoices.includes(3) &&
              oChoices.includes(4) &&
              oChoices.includes(5))
              {
                alert("O won");
          }

           else if (
              oChoices.includes(6) &&
              oChoices.includes(7) &&
              oChoices.includes(8))
              {
                alert("O won");
          }
        console.log("o chooses:", oChoices);
    }


    cross.appendChild(gameIcon);

      if (count === 9) {
        setTimeout(() => alert("Game over"), 0.5);
      }


});
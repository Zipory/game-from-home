"use strict";

/*--------------------starter------------------------------------- */
let theGame = document.querySelector(".game");
let startButton = document.querySelector(".start-button");
let textStart = document.querySelector(".starter");

startButton.addEventListener("click", startTheGame);

function startTheGame() {
  textStart.style.display = "none";
  theGame.style.display = "flex";
}

/*--------------------------------------------------------- */
/*--------------------------the game------------------------------- */
let theBoard = document.querySelector(".board");
let theRow = 30;
let theColumn = 30;
let arrBoxes = [];
for (let i = 0; i < theRow; i++) {
  arrBoxes.push([]);
  for (let j = 0; j < theColumn; j++) {
    let div = document.createElement("div");
    div.classList.add("box");
    arrBoxes[i].push(div);
    theBoard.append(div);
  }
}
let player = document.querySelector(".player");
arrBoxes[0][0].append(player);
arrBoxes[1][1].append()
arrBoxes[2][2].append()
arrBoxes[3][3].append()
arrBoxes[4][4].append()
arrBoxes[5][5].append()
arrBoxes[6][6].append()
arrBoxes[7][7].append()
arrBoxes[8][8].append()
document.addEventListener("");

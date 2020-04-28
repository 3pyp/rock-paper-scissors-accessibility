let newName = document.querySelector("#get-name__name");
let playerWeapon = document.querySelector("#player__weapon");
let playerLabel = document.querySelector("#player__label");
let btn = document.querySelector("#button");
let identifierText = document.querySelector("#identifier__text");
let error = document.querySelector("#error");
let state = 0;

/**
 * Initialize function.
 */
function init() {
  let player = document.querySelector("#player__name");
  let getName = document.querySelector("#get-name");
  let game = document.querySelector("#game");

  player.innerText = newName.value;
  getName.style.display = "none";
  game.style.display = "flex";
  playerWeapon.focus();
  state++;
}

btn.addEventListener("click", function () {
  if (newName.value === "") {
    error.style.display = "block";
    error.focus();
  } else {
    error.style.display = "none";
    if (state > 0) {
      match();
    } else {
      init();
    }
  }
});

newName.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    btn.click();
  }
});

/**
 * Get players weapon to be compare.
 */
function match() {
  let computer = document.querySelector("#computer__weapon");
  let compuWeapon = selectCompuWeapon();
  computer.innerHTML = compuWeapon;
  chooseWinner(playerWeapon.value, compuWeapon);
  identifierText.focus();
}
/**
 * Select a random weapon for the computer.
 * @return String
 */
function selectCompuWeapon() {
  let weapons = ["Rock", "Paper", "Scissors"];
  return weapons[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
}
/**
 * Define the winner comparing their weapons.
 * @param {string} weapon1 Player's weapon
 * @param {string} weapon2 Computer's weapon
 */
function chooseWinner(weapon1, weapon2) {
  let choices = `${weapon1} ${weapon2}`;
  switch (choices) {
    case "Rock Scissors":
    case "Paper Rock":
    case "Scissors Paper":
      identifierText.innerText = `${newName.value} Wins`;
      identifierText.setAttribute(
        "aria-label",
        `${newName.value} ${weapon1}, Computer ${weapon2}, ${newName.value} Wins`
      );
      break;
    case "Rock Paper":
    case "Paper Scissors":
    case "Scissors Rock":
      identifierText.innerText = "Computer wins";
      identifierText.setAttribute(
        "aria-label",
        `${newName.value} ${weapon1}, Computer ${weapon2}, Computer Wins`
      );
      break;
    default:
      identifierText.innerText = "Tie";
      identifierText.setAttribute(
        "aria-label",
        `${newName.value} ${weapon1}, Computer ${weapon2}, Tie`
      );
      break;
  }
}

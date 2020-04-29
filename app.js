(function () {
  const newName = document.querySelector("#get-name__name");
  const playerWeapon = document.querySelector("#player__weapon");
  const playerLabel = document.querySelector("#player__label");
  const btn = document.querySelector("#button");
  const identifierText = document.querySelector("#identifier__text");
  const error = document.querySelector("#error");
  const enterKey = 13 // Number 13 is the "Enter" key on the keyboard
  const weapons = ["Rock", "Paper", "Scissors"];
  let gameState = 0;

  /**
   * Initialize function.
   */
  function init() {
    addBtnListener();
    addInputListener();
  }

  /**
   *  Start Game function.
   */
  function startGame() {
    const player = document.querySelector("#player__name");
    const getName = document.querySelector("#get-name");
    const game = document.querySelector("#game");

    player.innerText = newName.value;
    getName.classList.toggle("hidden");
    game.classList.toggle("hidden");
    playerWeapon.focus();
    gameState++;
  }
  /**
   *  Add a click event to the main button.
   */
  function addBtnListener() {
    btn.addEventListener("click", function () {
      if (newName.value === "") {
        error.style.display = "block";
        error.focus();
      } else {
        error.style.display = "none";
        if (gameState > 0) {
          match();
        } else {
          startGame();
        }
      }
    });
  }
  /**
   *  Add a keyup event to the input name (Accessibility requirement).
   */
  function addInputListener(params) {
    newName.addEventListener("keyup", function (event) {
      if (event.keyCode === enterKey) {
        btn.click();
      }
    });
  }

  /**
   * Get players weapon to be compare.
   */
  function match() {
    const computer = document.querySelector("#computer__weapon");
    const compuWeapon = selectCompuWeapon();
    computer.innerHTML = compuWeapon;
    chooseWinner(playerWeapon.value, compuWeapon);
  }
  /**
   * Select a random weapon for the computer.
   * @return String
   */
  function selectCompuWeapon() {
    return weapons[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
  }
  /**
   * Define the winner comparing their weapons.
   * @param {string} weapon1 Player's weapon
   * @param {string} weapon2 Computer's weapon
   */
  function chooseWinner(weapon1, weapon2) {
    const choices = `${weapon1} ${weapon2}`;
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
  init();
})();

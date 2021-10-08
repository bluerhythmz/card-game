import { decks } from "./cards.js";

const startBtns = Array.from(document.querySelectorAll("[data-button]"));
const buttonContainer = document.querySelector(".container");
let d1Panel = document.getElementById("d1Panel");
let d2Panel = document.getElementById("d2Panel");
let logo = document.getElementById("logo");
let d1Cover = document.querySelector("#d1-cover");
let d2Cover = document.querySelector("#d2-cover");
let duelMoves = document.querySelector(".duel-moves");
let introScreen = document.querySelector(".intro-screen");
let gameScreen = document.querySelector(".game-screen");

class Duelist {
  constructor(name, _cards, avatar) {
    this.name = name;
    this.cards = _cards;
    this.avatar = avatar;
    this.lifePoints = 1000;
  }
}

const field = {
  playerOneField: {
    card: document.getElementById("duelist1-monster"),
    cardImage: document.getElementById("duelist1-card"),
    attackPoints: document.getElementById("duelist1-panel-atk"),
    avatarElement: document.getElementById("duelist1-avatar"),
    battleResultElement: document.getElementById("result1"),
    lifePointsElement: document.getElementById("duelist1-lp"),
  },
  playerTwoField: {
    card: document.getElementById("duelist2-monster"),
    cardImage: document.getElementById("duelist2-card"),
    attackPoints: document.getElementById("duelist2-panel-atk"),
    avatarElement: document.getElementById("duelist2-avatar"),
    battleResultElement: document.getElementById("result2"),
    lifePointsElement: document.getElementById("duelist2-lp"),
  },
};

const yugi = new Duelist("Yugi", decks.yugiCards, "./images/dm01.png");
const kaiba = new Duelist("Kaiba", decks.kaibaCards, "./images/dm02.png");
const marik = new Duelist("Marik", decks.marikCards, "./images/dm10.png");
const joey = new Duelist("Joey", decks.joeyCards, "./images/dm03.png");
const mai = new Duelist("Mai", decks.maiCards, "./images/dm04.png");

let duelistArray = [yugi, kaiba, marik, joey, mai];
let duelingOpponent = duelistArray[Math.floor(Math.random() * 5)];

const duel = (duelist1, duelist2) => {
  /* let d1FieldCardElement = document.getElementById('duelist1-monster')
    let d2FieldCardElement = document.getElementById('duelist2-monster')
    let duelist1AtkPanel = document.getElementById("duelist1-panel-atk")
    let duelist2AtkPanel = document.getElementById("duelist2-panel-atk")
    let duelist1Avatar = document.getElementById("duelist1-avatar")
    let duelist2Avatar = document.getElementById("duelist2-avatar")
    let duelist1CardImage = document.getElementById('duelist1-card')
    let duelist2CardImage = document.getElementById('duelist2-card')
    let result1 = document.getElementById('result1')
    let result2 = document.getElementById('result2')
    let tally1 = document.getElementById("duelist1-lp")
    let tally2 = document.getElementById("duelist2-lp") */
  let battleText = document.getElementById("battleText");

  duelStart();
  function duelStart() {
    let duelist1Cards = duelist1.cards[Math.floor(Math.random() * 5)];
    let duelist2Cards = duelist2.cards[Math.floor(Math.random() * 5)];
    duelMoves.style.display = "flex";
    field.playerOneField.cardImage.src = duelist1Cards.img;
    field.playerTwoField.cardImage.src = duelist2Cards.img;
    field.playerOneField.avatarElement.src = duelist1.avatar;
    field.playerTwoField.avatarElement.src = duelist2.avatar;
    field.playerOneField.attackPoints.innerHTML = `ATK: ${duelist1Cards.attackPoints}`;
    field.playerTwoField.attackPoints.innerHTML = `ATK: ${duelist2Cards.attackPoints}`;
    field.playerOneField.battleResultElement.innerHTML = "";
    field.playerOneField.card.src = duelist1Cards.img;
    field.playerTwoField.card.src = duelist2Cards.img;
    battleText.innerHTML = "VS";
    field.playerTwoField.battleResultElement.innerHTML = "";
    field.playerOneField.lifePointsElement.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
    field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
    setTimeout(calculation, 1800);

    function calculation() {
      let attackDifference = Math.abs(
        duelist1Cards.attackPoints - duelist2Cards.attackPoints
      );
      if (duelist1Cards.attackPoints > duelist2Cards.attackPoints) {
        let finalVal = duelist2.lifePoints - attackDifference;
        let decrement = 25;
        field.playerTwoField.battleResultElement.innerHTML = `${duelist2.name} loses -${attackDifference} Life Points!`;
        field.playerTwoField.card.src = "";
        battleText.innerHTML = "";
        field.playerOneField.battleResultElement.innerHTML = "";
        const counterDecrementer = () => {
          if (duelist2.lifePoints > finalVal) {
            field.playerOneField.lifePointsElement.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
            field.playerTwoField.lifePointsElement.innerHTML = `${
              duelist2.name
            }: ${Math.ceil((duelist2.lifePoints -= decrement))}`;
            setTimeout(counterDecrementer, 10);
          } else {
            duelist2.lifePoints = finalVal;
            field.playerOneField.lifePointsElement.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
            field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
          }
        };
        counterDecrementer();

        setTimeout(checkForWin, 1000);
      }
      if (duelist2Cards.attackPoints > duelist1Cards.attackPoints) {
        /* duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                result1.innerHTML = `${duelist1.name} loses -${attackDifference} Life Points!`
                result2.innerHTML = ""
                battleText.innerHTML = ""
                d1FieldCardElement.src = ""
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                setTimeout(checkForWin, 1000) */
        let finalVal2 = duelist1.lifePoints - attackDifference;
        let decrement2 = 25;
        field.playerOneField.battleResultElement.innerHTML = `${duelist1.name} loses -${attackDifference} Life Points!`;
        field.playerOneField.card.src = "";
        battleText.innerHTML = "";
        field.playerTwoField.battleResultElement.innerHTML = "";

        const counterDecrementer2 = () => {
          if (duelist1.lifePoints > finalVal2) {
            field.playerOneField.lifePointsElement.innerHTML = `${
              duelist1.name
            }: ${Math.ceil((duelist1.lifePoints -= decrement2))}`;
            field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
            setTimeout(counterDecrementer2, 1);
          } else {
            duelist1.lifePoints = finalVal2;
            field.playerOneField.lifePointsElement.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
            field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
          }
        };
        counterDecrementer2();

        setTimeout(checkForWin, 1000);
      } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
        field.playerOneField.battleResultElement.innerHTML = "";
        field.playerTwoField.battleResultElement.innerHTML = "";
        battleText.innerHTML = "Draw!";
        setTimeout(checkForWin, 1000);
      }
    }
  }

  const checkForWin = () => {
    if (duelist2.lifePoints <= 0) {
      duelist1Wins();
    } else if (duelist1.lifePoints <= 0) {
      duelist2Wins();
    } else {
      setTimeout(duelStart, 1800);
    }
  };

  const duelist1Wins = () => {
    field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
    field.playerOneField.battleResultElement.innerHTML = `${duelist1.name} is The King of Games`;
    field.playerTwoField.battleResultElement.innerHTML = "";
    battleText.innerHTML = "";
    field.playerTwoField.card.src = "";
    field.playerOneField.card.src = duelist1.avatar;
    d2Cover.style.display = "block";
    d2Cover.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
    reset();
  };

  const duelist2Wins = () => {
    field.playerTwoField.lifePointsElement.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
    field.playerTwoField.battleResultElement.innerHTML = `${duelist2.name} is The King of Games`;
    field.playerOneField.battleResultElement.innerHTML = "";
    battleText.innerHTML = "";
    field.playerOneField.card.src = "";
    field.playerTwoField.card.src = duelist2.avatar;
    d1Cover.style.display = "block";
    d1Cover.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
    reset();
  };

  function reset() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-btn");
    resetButton.innerHTML = "Reset";
    battleText.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      buttonContainer.classList.remove("hide");
      d1Panel.style.display = "none";
      d2Panel.style.display = "none";
      d1Cover.style.display = "none";
      d2Cover.style.display = "none";
      field.playerOneField.battleResultElement.innerHTML = "";
      field.playerTwoField.battleResultElement.innerHTML = "";
      battleText.removeChild(resetButton);
      logo.style.display = "block";
      introScreen.style.display = "flex"
      gameScreen.style.display = "none"
      field.playerOneField.card.src = "";
      field.playerTwoField.card.src = "";
      startGame();
    });
  }

  function startGame() {
    buttonContainer.classList.remove("hide");
    d1Panel.style.display = "none";
    d2Panel.style.display = "none";
    duelist1.lifePoints = 8000;
    duelist2.lifePoints = 8000;
    field.playerOneField.card.src = "";
    field.playerTwoField.card.src = "";
    duelMoves.style.display = "none";
  }
};

function displayPoints() {
  buttonContainer.classList.add("hide");
  d1Panel.style.display = "flex";
  d2Panel.style.display = "flex";
}

startBtns.forEach((btn, i) => {
  function playerSelect(player, opponent) {
    btn.addEventListener("click", () => {
      while (player === opponent) {
        duelistArray.pop(opponent);
        opponent = duelistArray[Math.floor(Math.random() * 4)];
      }
      logo.style.display = "none";
      introScreen.style.display = "none"
      gameScreen.style.display = "flex"
      duel(player, opponent);
      displayPoints();
    });
  }
  switch (i) {
    case 0:
      playerSelect(yugi, duelingOpponent);
      break;
    case 1:
      playerSelect(kaiba, duelingOpponent);
      break;
    case 2:
      playerSelect(marik, duelingOpponent);
      break;
    case 3:
      playerSelect(joey, duelingOpponent);
      break;
    case 4:
      playerSelect(mai, duelingOpponent);
      break;
    default:
      alert("error");
  }
});

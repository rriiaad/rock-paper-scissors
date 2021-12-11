// pop up

button = document.querySelector(".rules");

button.onclick = () => {
  document.querySelector(".pop-up-wrapper").classList.add("visible");
  document.querySelector(".overlay").classList.add("visible");
};

close = document.querySelector("#close");

close.onclick = () => {
  document.querySelector(".pop-up-wrapper").classList.remove("visible");
  document.querySelector(".overlay").classList.remove("visible");
};

// the game

function pickHand(hand) {
  let userChoice = document.querySelector(`.${hand}`);
  let iaChoice = document.querySelector(`.${iaPick()}`);

  document.querySelector(".game").style.display = "none";
  document.querySelector(".game-choice").style.display = "grid";
  document.querySelector(
    ".iaPick"
  ).innerHTML = `<h1>THE HOUSE PICKED</h1> <div class="${iaChoice.getAttribute(
    "class"
  )}">
  <img src=${iaChoice.children[0].getAttribute("src")}  alt="ia choice img">
</div>`;
  document.querySelector(
    ".userhand"
  ).innerHTML = `<h1>YOU PICKED</h1><div class="${userChoice.getAttribute(
    "class"
  )}">
  <img src=${userChoice.children[0].getAttribute("src")}  alt="user choice img">
</div>`;

  result(userChoice.getAttribute("class"), iaChoice.getAttribute("class"));
}

function iaPick() {
  pick = Math.random();
  if (pick < 0.33) {
    return (hand = "paper");
  } else if (pick < 0.66) {
    return (hand = "rock");
  } else {
    return (hand = "sisrource");
  }
}

function result(user, ia) {
  if (user === ia) {
    document.querySelector("#res").textContent = "DRAW";
    return;
  }
  if (
    (user == "paper" && ia == "sisrource") ||
    (user == "rock" && ia == "paper") ||
    (user == "sisrource" && ia == "rock")
  ) {
    document.querySelector("#res").textContent = "YOU LOOS";
    return;
  }
  score = document.querySelector("#score").textContent;
  document.querySelector("#res").textContent = "YOU WIN";
  document.querySelector("#score").textContent = parseInt(score) + 1;
}

document.querySelector("#restart").onclick = () => {
  document.querySelector(".game").style.display = "flex";
  document.querySelector(".game-choice").style.display = "none";
};

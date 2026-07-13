const buttons = document.querySelectorAll(".btn");

var turnO = true;

winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (buttons.innerText == "") {
      if (turnO) {
        buttons.innerText = "O";
        turnO = false;
        buttons.style.color = "red";
      } else {
        buttons.innerText = "X";
        turnO = true;
        buttons.style.color = "blue";
      }
    }
    checkWinner();
  });
});

const checkWinner = () => {
  for (const pattern of winPattern) {
    let button1 = buttons[pattern[0]].innerText;
    let button2 = buttons[pattern[1]].innerText;
    let button3 = buttons[pattern[2]].innerText;

    if (button1 != "" && button2 != "" && button3 != "") {
      if (button1 == button2 && button2 == button3) {
        alert(button1 + " is winner");
      }
    }
  }
};

const resetButton = document.querySelector(".buttonn");

resetButton.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
  turnO = true;
});

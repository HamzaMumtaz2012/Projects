const guess = document.querySelector("input")
let randomNumber = Math.floor(Math.random() * 10) ;
const btn = document.querySelector("button")
const body = document.querySelector("body")
let result = document.createElement("p")
 result.innerText = ""
const div = document.querySelector(".main")
div.append(result)
result.style.position = "relative"
result.style.top = "190px"
const actualNumber = document.createElement("div")
actualNumber.style.border = "1px solid white";
actualNumber.style.height = "70px"
actualNumber.style.width = "70px"
actualNumber.style.display = "flex"
actualNumber.style.color = "black"
actualNumber.style.fontSize = "1em"
actualNumber.style.justifyContent = "center"
actualNumber.style.alignItems = "center"
actualNumber.style.backgroundColor = "white"
actualNumber.style.marginLeft = "40px"
actualNumber.style.marginTop = "20px"
actualNumber.style.position = "relative"
actualNumber.style.left = "78%"
actualNumber.style.top = "30px"
actualNumber.style.borderRadius = "10px"
actualNumber.innerText = ""
body.append(actualNumber)
btn.addEventListener("click", () => {
  const userGuess = Number(guess.value); // get input value as a number

  if (guess.value === "") {
    result.innerText = "Enter a number";
    result.style.color = "red"
    actualNumber.style.color = "white"
  } 
  else if (userGuess > randomNumber) {
    result.innerText = "Good guess, but you guessed too high!";
    result.style.color = "orange"
  } 
  else if (userGuess < randomNumber) {
    result.innerText = "Good guess, but you guessed too low!";
    result.style.color = "yellow"
  } 
  else {
    result.innerText = "🎉 Congratulations! You guessed right!";
    result.style.color = "lime"
  }

actualNumber.innerText = randomNumber
setTimeout(() => {
  guess.value = ""
  actualNumber.innerText = ""
  result.innerText = ""
  randomNumber = Math.floor(Math.random() * 10) ;
}, 1900);
});





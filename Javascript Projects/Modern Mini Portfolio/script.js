
const button = document.querySelector("button")
const input = document.querySelector("input")
const message = document.querySelector("#msg")
input.addEventListener('click', (e) => {
  input.placeholder = "Your name"
  input.style.border = "3px solid #cbd5e1"
  input.style.color = "black"
});
button.addEventListener('click', (e) => {
  if (input.value.trim() === "") {
input.style.border = "3px solid red"
input.value = ""
input.placeholder = "Please enter your name"
input.style.color = "red"

// button.append(message)
  } else {
    message.innerText = "Message Sent"
    message.style.color = "rgb(58, 188, 58)"
    input.value = ""
setTimeout(() => {
  message.innerText = ""
}, 1300);

  }
});


const clock = document.querySelector(".clock")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const button = document.querySelector("button")
const all = document.querySelector("body")
var p = true
button.addEventListener('click', (e) => {
  if (p == true) {
  button.style.backgroundColor = "white"
  button.style.color = "black"
  all.style.backgroundColor = "black"
  all.style.color = "white"
  clock.style.borderColor = "white"
  button.style.textShadow = "9px 5px 6px black"
p = false
} else {
  button.style.backgroundColor = "black"
  button.style.color = "white"
  all.style.backgroundColor = "white"
  all.style.color = "black"
    clock.style.borderColor = "black"
    button.style.textShadow = "9px 5px 6px white"
p = true
}

});



function timee() {
  const time = new Date()

  hours.innerText = time.getHours().toString().padStart(2, "0") + " : "
  minutes.innerText = time.getMinutes().toString().padStart(2, "0") + " : "
  seconds.innerText = time.getSeconds().toString().padStart(2, "0")

}

setInterval(() => {
timee()
}, 1000 );



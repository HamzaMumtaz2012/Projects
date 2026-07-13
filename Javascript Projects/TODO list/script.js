const container = document.querySelector(".container");
const input = document.querySelector("input");
const button = document.querySelector(".button");
const heading = document.querySelector("h1");






button.addEventListener('click', (e) => {
if (input.value == "") {
  input.placeholder = "⚠️ TODO CAN'T BE EMPTY"
  input.style.border = "2px solid red";
    container.style.height = "105px"
    error.style.transition = "all 0.3s ease-in-out"


input.style.fontWeight = "bolder"
  container.style.height = "105px"

}

else {

    const todo = document.createElement("div")
    todo.innerText = input.value
    input.value = ""

    todo.style.wordBreak = "break-word"
    todo.style.overflow = "break-word"
    todo.style.padding = " 7px 15px"
    todo.style.margin = "8px 0"
    container.append(todo)
    todo.style.background = "linear-gradient(135deg,#6a5acd,#00b4d8)"
    todo.style.color = "white"
    todo.style.borderRadius = "5.9px"
    todo.style.transition = "all 0.3s ease-in-out"

const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete"
todo.append(deleteButton)
deleteButton.classList.add("Buttonn")
deleteButton.addEventListener('click', (e) => {
  todo.remove()
});
  }
})
input.addEventListener('click', (e) => {
   if (input.placeholder == "⚠️ TODO CAN'T BE EMPTY") {
input.placeholder = "PLEASE ADD A TODO"
input.style.border = "2px solid black"
   }
  });





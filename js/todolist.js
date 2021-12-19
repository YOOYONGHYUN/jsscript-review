const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDo() {
  localStorage.setItem("newToDo", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.innerText = "❌";
  span.innerText = newtodo.text;
  btn.addEventListener("click", deleteToDo);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  const toDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todoInput.value = "";
  toDos.push(toDoObj);
  paintToDo(toDoObj);
  saveToDo();
}

todoForm.addEventListener("submit", handleSubmit);

const savedToDo = localStorage.getItem("newToDo");

if (saveToDo !== null) {
  const parsedToDo = JSON.parse(savedToDo);
  parsedToDo.forEach(paintToDo);
  toDos = parsedToDo;
}

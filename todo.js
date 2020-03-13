const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

function paintToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    span.innerText = text;
    delBtn.innerText = "delete";
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

const TODOS_LS = "toDos"

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        console.log("todos exist");
    } else {
        console.log("todos doesn't exist");
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
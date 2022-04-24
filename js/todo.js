const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");
const todoGetItem = JSON.parse(localStorage.getItem("todo"));

let todoArray = [];

function todoSubmit(event){
  const USERNAME_KEY_ = "username";
  const usernameSave_ = localStorage.getItem(USERNAME_KEY_);
  event.preventDefault();
  const todoText = todoInput.value
  todoInput.value = "";

  if(usernameSave_ == null){
    alert('Please log in.');
    todoInput.value = "";
    return false;
  }

  const todoObject = {
    id : Date.now(),
    text : todoText
  };
  todoArray.push(todoObject);
  todoCreate(todoObject);
  todoSave();
}

function todoSave(){
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

function todoClose(event){  
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter(num => num.id != li.id);
  todoSave();
}

function todoCreate(item){
  const li = document.createElement('li');
  li.id = item.id;
  const span = document.createElement('span');
  span.innerText = item.text;
  const button = document.createElement('button');
  button.innerText = 'x';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", todoClose);
}

todoForm.addEventListener("submit", todoSubmit);

if(todoGetItem !== null){
  todoArray = todoGetItem;
  todoGetItem.forEach(todoCreate);
}

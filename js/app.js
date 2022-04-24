const todoBox = document.querySelector("#todo-box");
const loginBox = document.querySelector('#login-box');
const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const loginInput = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const usernameSave = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
  event.preventDefault();
 	localStorage.setItem(USERNAME_KEY, loginInput.value);
  const username = loginInput.value;
  paintGreeting(username);
}

function paintGreeting(usernameSave){
  username.innerHTML = `Wellcome, ${usernameSave}`;
  loginBox.style.display = 'none';
  todoBox.style.display = 'grid';
  loginForm.classList.add(HIDDEN_CLASSNAME);
  username.classList.remove(HIDDEN_CLASSNAME);  
}

if(usernameSave === null){
  loginBox.style.display = 'grid';
  todoBox.style.display = 'none';
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}else{
  loginBox.style.display = 'none';
  todoBox.style.display = 'grid';
  paintGreeting(usernameSave);
}
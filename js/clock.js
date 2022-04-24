const currentTime = document.querySelector("#timer");

function currentTimer(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  currentTime.innerText = `${hour}:${minutes}:${seconds}`;
}
currentTimer();
setInterval(currentTimer, 1000);


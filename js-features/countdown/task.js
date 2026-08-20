let timerElement = document.getElementById("timer");
let count = Number(timerElement.textContent);

const interval = setInterval(() => {
  count--;
  timerElement.textContent = count;
  if (!count) {
    alert("Вы победили в конкурсе");
    clearInterval(interval);
  }
}, 1000);

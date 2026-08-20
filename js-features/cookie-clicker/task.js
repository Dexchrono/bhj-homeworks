const cookieElement = document.getElementById("cookie");
const timerElement = document.getElementById("clicker__counter");
let counter = Number(timerElement.textContent);
let sizeW = cookieElement.width || 200;
let sizeY = cookieElement.height || 200;

cookieElement.onclick = (e) => {
  counter++;
  timerElement.textContent = counter;
  if (counter % 2 === 0) {
    sizeW = sizeW + 100;
    sizeY = sizeY + 100;
    cookieElement.width = sizeW;
    cookieElement.height = sizeY;
  } else {
    sizeW = sizeW - 100;
    sizeY = sizeY - 100;
    cookieElement.width = sizeW;
    cookieElement.height = sizeY;
  }
};

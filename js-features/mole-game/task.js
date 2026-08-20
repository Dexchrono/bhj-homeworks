const winCounterEl = document.getElementById("dead");
const lossCounterEl = document.getElementById("lost");
let winsCount = Number(winCounterEl.textContent);
let lossesCount = Number(lossCounterEl.textContent);

function updateCounterEl(counter, value) {
  counter.textContent = value;
}

function clearCounters() {
  winsCount = 0;
  updateCounterEl(winCounterEl, 0);
  lossesCount = 0;
  updateCounterEl(lossCounterEl, 0);
}

const holeArr = [];
document.querySelectorAll(".hole").forEach((item) => {
  holeArr.push(item);
});

holeArr.forEach((hole) => {
  hole.onclick = (e) => {
    if (hole.classList.contains("hole_has-mole")) {
      winsCount++;
      updateCounterEl(winCounterEl, winsCount);
    } else {
      lossesCount++;
      updateCounterEl(lossCounterEl, lossesCount);
    }

    if (winsCount === 10) {
      setTimeout(() => {
        alert("Вы победили!");
        clearCounters();
      }, 10);
    }

    if (lossesCount === 10) {
      setTimeout(() => {
        alert("Вы проиграли!");
        clearCounters();
      }, 10);
    }
  };
});

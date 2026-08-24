const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
  function slideNext() {
    const items = Array.from(rotator.querySelectorAll(".rotator__case"));
    const prevIndex = items.findIndex((item) => item.classList.contains("rotator__case_active"));

    if (prevIndex === -1) {
      return;
    }

    items[prevIndex].classList.remove("rotator__case_active");

    const newIndex = prevIndex < items.length - 1 ? prevIndex + 1 : 0;

    items[newIndex].classList.add("rotator__case_active");
  }

  setInterval(() => {
    slideNext();
  }, 1000);
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const valueBtn = dropdown.querySelector(".dropdown__value");
  const list = dropdown.querySelector(".dropdown__list");
  const items = dropdown.querySelectorAll(".dropdown__item");

  valueBtn.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
  });

  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const link = item.querySelector("a");
      const newValue = link ? link.textContent : item.textContent;
      valueBtn.textContent = newValue;

      list.classList.remove("dropdown__list_active");
    });
  });
});

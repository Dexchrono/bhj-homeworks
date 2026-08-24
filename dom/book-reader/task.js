const fzControl = document.querySelectorAll(".font-size");
const bookElement = document.getElementById("book");

fzControl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    fzControl.forEach((btn) => {
      btn.classList.remove("font-size_active");
    });

    button.classList.add("font-size_active");

    bookElement.classList.remove("book_fs-big", "book_fs-small");

    if (button.classList.contains("font-size_big")) {
      bookElement.classList.add("book_fs-big");
    } else if (button.classList.contains("font-size_small")) {
      bookElement.classList.add("book_fs-small");
    }
  });
});

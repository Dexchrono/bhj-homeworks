const elements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", handleRevealContent);

function handleRevealContent() {
  elements.forEach((element) => {
    const rectElement = element.getBoundingClientRect();

    const isVisible = rectElement.top < window.innerHeight && rectElement.bottom >= 0;

    if (isVisible) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
}

handleRevealContent();

const accordion_items = document.querySelectorAll(".accordion-item");

accordion_items.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  const description = item.querySelector(".accordion-content");

  title.addEventListener("click", () => {
    for (let i = 0; i < accordion_items.length; i++) {
      if (accordion_items[i] != item) {
        accordion_items[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});

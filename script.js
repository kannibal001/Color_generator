const contents = document.querySelectorAll(".content");
const Header = document.querySelector(".header");

contents.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("content-click")) {
      event.target.classList.remove("content-click");
      contents.forEach((element) => {
        element.classList.remove("content-click");
      });
    } else {
      contents.forEach((element) => {
        element.classList.remove("content-click");
      });
      event.target.classList.add("content-click");
    }
  });
});

const menuOpenbtn = document.querySelector(".menuOpenbtn");
const openMobilemenu = document.querySelector(".openMobilemenu");
const closeDivbtn = document.querySelector(".closeDivbtn");
const menuLinks = document.querySelectorAll(".openMobilemenu a");

menuOpenbtn.addEventListener("click", () => {
  openMobilemenu.classList.remove("translate-x-full");
});

closeDivbtn.addEventListener("click", () => {
  openMobilemenu.classList.add("translate-x-full");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    openMobilemenu.classList.add("translate-x-full");
  });
});

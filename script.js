
const site = document.getElementById("site");
const button = document.getElementById("openButton");
const letter = document.getElementById("letterSection");

let opened = false;

button.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  site.classList.add("open");
  button.setAttribute("aria-expanded", "true");

  window.setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1350);
});

const button = document.getElementById('openButton');
const page = document.getElementById('page');
const letter = document.getElementById('letterWrap');

button.addEventListener('click', () => {
  page.classList.add('opened');
  button.setAttribute('aria-expanded', 'true');
  setTimeout(() => {
    letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 950);
});

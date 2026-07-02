const openButton = document.getElementById('openButton');
const letter = document.getElementById('letter');

function openLetter() {
  document.body.classList.add('opened');
  openButton.setAttribute('aria-expanded', 'true');
  setTimeout(() => {
    letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 850);
}

openButton.addEventListener('click', openLetter);

openButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openLetter();
  }
});

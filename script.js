const button = document.getElementById('openButton');
const letter = document.getElementById('letter');

function openGift() {
  if (document.body.classList.contains('opened')) return;
  document.body.classList.add('opened');
  setTimeout(() => {
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1050);
}

button.addEventListener('click', openGift);
button.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openGift();
  }
});

const button = document.getElementById('openButton');
const letterScene = document.getElementById('letterScene');

function openGift() {
  if (document.body.classList.contains('opened')) return;
  document.body.classList.add('opened');
  button.setAttribute('aria-label', 'Письмо открыто');
  setTimeout(() => {
    letterScene.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 850);
}

button.addEventListener('click', openGift);
button.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openGift();
  }
});

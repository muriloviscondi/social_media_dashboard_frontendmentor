addEventListener('load', () => {
  const switchDarkMode = document.querySelector('#switch');
  const cards = document.querySelectorAll('.cards');

  switchDarkMode.addEventListener('click', () => {
    if (switchDarkMode.checked) {
      darkMode(cards);
      return;
    }

    if (!switchDarkMode.checked) {
      lightMode(cards);
      return;
    }
  });
});

function darkMode(cards) {
  document.querySelector('body').classList.add('body-dark-mode');
  document.querySelector('h1').classList.add('dark-mode-text');
  document.querySelector('h2').classList.add('dark-mode-text');

  for (let card of cards) {
    card.classList.add('dark-mode');
  }
}

function lightMode(cards) {
  document.querySelector('body').classList.remove('body-dark-mode');
  document.querySelector('h1').classList.remove('dark-mode-text');
  document.querySelector('h2').classList.remove('dark-mode-text');

  for (let card of cards) {
    card.classList.remove('dark-mode');
  }
}

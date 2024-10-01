const cardSlider = document.querySelector('.pokemon-card-slider');
const cardItems = document.querySelectorAll('.pokemon-card-item');

cardItems.forEach((cardItem) => {
  cardItem.addEventListener('click', () => {
    cardSlider.style.animationPlayState = 'paused';
  });
});

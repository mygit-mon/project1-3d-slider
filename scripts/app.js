// Function that will get the date today
function getToday() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// Function that will show the banner
function showBanner() {
  const displayBanner = document.getElementById('banner');

  displayBanner.classList.add('active');
}

// Function the will close the banner
function closeBanner() {
  const closeBanner = document.getElementById('banner');

  closeBanner.classList.remove('active');

  localStorage.setItem('checkBanner', getToday());
}

// Function that will check the banner if it was already displayed
function checkDisplayedBanner() {
  const checkBanner = localStorage.getItem('checkBanner');
  const today = getToday();

  if (!checkBanner || checkBanner !== today) {
    showBanner();
  }
}

document.querySelector('.close-banner').addEventListener('click', () => {
  closeBanner();
});

window.onload = checkDisplayedBanner();

// function view the card
function viewCard(cardName, cardImage, pokemonImg) {
  console.log(cardName, cardImage, pokemonImg);
  const popViewCard = document.querySelector('.pop-view-card');
  const cardSlider = document.querySelector('.pokemon-card-slider');
  const cardItems = document.querySelectorAll('.pokemon-card-item');

  cardItems.forEach((cardItem) => {
    if (cardItem.classList.contains(cardName)) {
      cardItem.classList.add('none');
    }
  });

  cardSlider.style.animationPlayState = 'paused';

  popViewCard.classList.add('active');

  popViewCard.innerHTML = `
  <div class="view-card-img">
    <img src='./assets/pokemon-card/${cardImage}' />
  </div>
  <div class="view-img">
    <img src='./assets/pokemon-image/${pokemonImg}'/>
  </div>
  `;

  const viewCardImage = document.querySelector('.view-card-img');

  const viewImage = document.querySelector('.view-img img');

  // Prevent clicks on the content from closing the pop-up
  viewCardImage.addEventListener('click', function (event) {
    event.stopPropagation();

    viewCardImage.classList.toggle('active');
    viewImage.classList.toggle('active');
  });
}

function closeViewCard() {
  const popViewCard = document.querySelector('.pop-view-card');
  const cardSlider = document.querySelector('.pokemon-card-slider');
  const cardItems = document.querySelectorAll('.pokemon-card-item');

  cardItems.forEach((cardItem) => {
    cardItem.classList.remove('none');
  });

  cardSlider.style.animationPlayState = 'running';
  popViewCard.classList.remove('active');
}

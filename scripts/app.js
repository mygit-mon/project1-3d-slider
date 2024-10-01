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

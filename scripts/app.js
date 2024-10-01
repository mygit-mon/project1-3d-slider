// Function that will get the day today
function getToday() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// Function that will show the banner
function showBanner() {
  const displayBanner = document.getElementById('banner');
  displayBanner.classList.add('active');
}

// Function that will check if the banner is already displayed today
function checkDisplyedBanner() {
  const lastDisplayedBanner = localStorage.getItem('lastDisplayedBanner');
  const today = getToday();

  if (!lastDisplayedBanner || !lastDisplayedBanner === today) {
    showBanner();
  }
}

window.onload = checkDisplyedBanner();

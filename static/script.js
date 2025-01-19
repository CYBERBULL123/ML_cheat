// Open Popup by ID
function openPopup(id) {
  document.getElementById(id).style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}

// Close All Popups
function closePopup() {
  document.querySelectorAll('.popup').forEach(popup => {
    popup.style.display = 'none';
  });
  document.querySelector('.overlay').style.display = 'none';
}

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }

  // Re-render charts with updated theme colors
  initializeCharts();
}

// Initialize charts on page load
document.addEventListener('DOMContentLoaded', function () {
  initializeCharts();
});
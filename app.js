const body = document.body;
const toggleBtn = document.querySelector('#toggle-btn');
const toggleCircle = document.querySelector('#toggle-circle');

// Hadle Dark/Light Mode Toggle - btn click
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    toggleCircle.style = 'transform: translateX(1.3rem)';
  } else {
    body.classList.replace('light', 'dark');
    toggleCircle.style = 'transform: translateX(0)';
  }
});

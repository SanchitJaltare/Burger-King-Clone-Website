document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    toggleBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    toggleBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });

  const signupToggle = document.getElementById('signup-toggle');
  const signupOptions = document.getElementById('signup-options');

  signupToggle.addEventListener('click', () => {
    signupOptions.style.display =
      signupOptions.style.display === 'flex' ? 'none' : 'flex';
  });

  document.addEventListener('click', function (e) {
    if (!signupToggle.contains(e.target) && !signupOptions.contains(e.target)) {
      signupOptions.style.display = 'none';
    }
  });
});
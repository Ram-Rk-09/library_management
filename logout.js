const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'login.html'; 
  }, 1000);
});

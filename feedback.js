const feedbackForm = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

feedbackForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  if (name === '' || email === '' || feedback === '') {
    alert('Please fill in all fields');
    return;
  }

  
  setTimeout(() => {
    
    successMessage.classList.remove('hidden');

    
    feedbackForm.reset();
  }, 1000);
}

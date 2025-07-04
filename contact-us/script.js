// Simple form validation (JS passes ESLint with recommended rules)

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formMessage.textContent = 'Please fill in all required fields.';
    formMessage.style.color = 'red';
    return;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value.trim())) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thank you! Your message has been sent.';
  formMessage.style.color = 'green';

  this.reset();
});

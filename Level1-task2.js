function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if (name.trim() === '') {
    alert('Please enter your name');
    return false;
  }
  if (email.trim() === '') {
    alert('Please enter your email');
    return false;
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  if (message.trim() === '') {
    alert('Please enter a message');
    return false;
  }
  document.getElementById('contactForm').reset();
  return true;
}
function isValidEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function submitForm(name, email, message) {
  console.log(`Submitting form with Name: ${name}, Email: ${email}, Message: ${message}`);
}
document.querySelector('.subscribe-button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.email-input').value;
    const messageDiv = document.querySelector('.message');
    
    if (email) {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
      messageDiv.textContent = 'Please enter a valid email address.';
    }
  });
  
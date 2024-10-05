document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!firstName) {
      alert('First Name is required');
      return;
    }
  
    if (!lastName) {
      alert('Last Name is required');
      return;
    }
  
    if (!email) {
      alert('Email is required');
      return;
    }
  
    if (!phoneNumber.match(/^\d{10}$/)) {
      alert('Phone number must be 10 digits');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
  
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password
    };
  
    console.log(formData);
  
    alert('Form submitted successfully!');
  
   
});

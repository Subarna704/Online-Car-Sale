document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to the server

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data from localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      if (userData.username === username && userData.password === password) {
        alert('Login successful!');
        // Redirect to a different page or do some action
        window.location.href = 'addcar.html';
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('No registered users found. Please register first.');
    }
  });

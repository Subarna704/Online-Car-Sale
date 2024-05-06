document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to the server

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate that name and username are not the same
    if (name === username) {
        alert("Username and Name should not be the same.");
        return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long and include at least one symbol and one number.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password // Note: In a real application, you'd hash this before storing
    };

    // Save the user data to localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Registration successful!');

    // Clear the form
    document.getElementById('register-form').reset();

    // Redirect to the signin page
    window.location.href = 'signin.html';
});

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
}

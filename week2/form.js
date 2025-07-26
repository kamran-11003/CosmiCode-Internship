document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = 'Invalid email address.';
        message.style.color = 'red';
        return;
    }
    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters.';
        message.style.color = 'red';
        return;
    }
    message.textContent = 'Registration successful!';
    message.style.color = 'green';
}); 
const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const firstName = document.querySelector('#firstName-login').value.toLowerCase().trim();
    const lastName = document.querySelector('#lastName-login').value.toLowerCase().trim();

    if (username && password) {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            body: JSON.stringify({ email, username, password, firstName, lastName }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

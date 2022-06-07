const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#email-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/teamPage');
        } else {
            alert(response.statusText);
        }
    }
};



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

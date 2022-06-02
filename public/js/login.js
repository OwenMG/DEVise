const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#email-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login')
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const firstName = document.querySelector('#firstName-login').value.trim();
    const firstName = document.querySelector('#firstName-login').value.trim();
}
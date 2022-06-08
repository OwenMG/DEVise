const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#typeEmailX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/joinTeam');
        } else {
            alert(response.statusText);
        }
    }
};



document.querySelector('.btn').addEventListener('click', loginFormHandler);

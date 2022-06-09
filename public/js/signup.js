const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#typeEmailX').value.trim();
    const username = document.querySelector('#typeUserNameX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();
    const first_name = document.querySelector('#typeFirstNameX').value.toLowerCase().trim();
    const last_ngame = document.querySelector('#typeLastNameX').value.toLowerCase().trim();

    if (username && password) {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            body: JSON.stringify({ email, username, password, first_name, last_name }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/joinTeam');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.btn').addEventListener('click', signupFormHandler);

const createTeamFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#team-name').value.trim();
    const password = document.querySelector('#team-password').value.trim();

    if (teamName && password) {
        const response = await fetch('/api/teams/', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const joinTeamFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#team-name').value.trim();
    const password = document.querySelector('#team-password').value.trim();

    if (teamName && password) {
        const response = await fetch('/api/teams/jointeam', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.join-form').addEventListener('submit', joinTeamFormHandler);
document.querySelector('.create-form').addEventListener('submit', createTeamFormHandler);
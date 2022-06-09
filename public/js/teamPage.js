const createTeamFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#typeNewTeamNameX').value.trim();
    const password = document.querySelector('#typeNewTeamPasswordX').value.trim();

    if (teamName && password) {
        const response = await fetch('/api/teams/', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/teamDash');
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
            document.location.replace('/teamDash');
        } else {
            alert(response.statusText);
        }
    }
};

const chooseTeamHandler = async (event) => {
    event.preventDefault();

    const teamSection = document.querySelector('#chooseTeam');
    const button = event.target;
    if (button.matches(".btn")) {
        document.location.replace('/teamDash');
        
    }
};

document.querySelector('#joinSubmit').addEventListener('click', joinTeamFormHandler);
document.querySelector('#createSubmit').addEventListener('click', createTeamFormHandler);
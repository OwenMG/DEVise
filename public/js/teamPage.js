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

    const name = document.querySelector('#typeExistTeamNameX').value.trim();
    const password = document.querySelector('#typeJoinTeamPasswordX').value.trim();

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
    
    const button = event.target;
    console.log(button.id);
    // if (button.matches(".btn")) {
    //     try {
    //         const response = await fetch(`/api/teams/${button.id}`, {
    //             method: 'POST',
    //             body: JSON.stringify({ name, password }),
    //             headers: { 'Content-Type': 'application/json'},
    //         });
    //     }
    //     document.location.replace('/teamDash');

    // }

    // if (email && password) {
    //     const response = await fetch('/api/users/login', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password }),
    //         headers: { 'Content-Type': 'application/json'},
    //     });

    //     if (response.ok) {
    //         document.location.replace('/joinTeam');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
};

document.querySelector('#joinSubmit').addEventListener('click', joinTeamFormHandler);
document.querySelector('#createSubmit').addEventListener('click', createTeamFormHandler);
document.querySelector('#joinTeam').addEventListener('click', chooseTeamHandler);
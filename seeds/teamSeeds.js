const { Team } = require('../models');
const teamData = [{
    "id": 1,
    "name": "Team 1",
    "password": "team1pass"
  }, 
  {
    "id": 2,
    "name": "Team 2",
    "password": "team2pass"
  },
  {
    "id": 3,
    "name": "Team 3",
    "password": "team3pass"
  }
]

const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;
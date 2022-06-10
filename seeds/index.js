const seedTeams = require('./teamSeeds');
const seedUsers = require('./userSeeds');
const seedUserTeams = require('./userTeamSeeds')
const seedKanban = require('./kanbanSeeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedTeams();
    console.log('\n----- TEAMS SEEDED -----\n');

    await seedUserTeams();
    console.log('\n----- TEAM-USERS SEEDED -----\n')

    await seedKanban();
    console.log('\n----- KANBAN SEEDED -----\n')

    process.exit(0);
};

seedAll();
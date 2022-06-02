const seedTeams = require('./teamSeeds');
const seedUsers = require('./userSeeds');
const seedUserTeams = require('./userTeamSeeds')

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

    process.exit(0);
};

seedAll();
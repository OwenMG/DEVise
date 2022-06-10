const seedTeams = require('./teamSeeds');
const seedUsers = require('./userSeeds');
const seedUserTeams = require('./userTeamSeeds')
const Kanban = require('../models/kanban');
const kanbanData = require('./kanban-seeds.json');


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

    await Kanban.bulkCreate(kanbanData, {
        individualHooks: true,
        returning: true,
      });

    process.exit(0);
};

seedAll();
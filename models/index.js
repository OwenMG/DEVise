const User = require('./User');
const Team = require('./Team');
const UserTeam = require('./UserTeam');


User.belongsToMany(Team, { through: UserTeam});
Team.belongsToMany (User, {through: UserTeam});

module.exports = { User, Team, UserTeam };

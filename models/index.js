const User = require('./User');
const Team = require('./Team');
const UserTeam = require('./UserTeam');
const Task = require('./Task');
const Kanban = require("./Kanban");


User.belongsToMany(Team, { through: UserTeam});
Team.belongsToMany (User, {through: UserTeam});

User.hasMany(Task, {
    foreignKey: 'assignedTo'
});
Task.belongsTo(User, {
    foreignKey: 'assignedTo'
});
module.exports = { User, Team, UserTeam, Task, Kanban };

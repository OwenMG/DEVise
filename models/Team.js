const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Team extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    }
  },
  {
    hooks: {
        beforeCreate: async (newTeamData) => {
        newTeamData.password = await bcrypt.hash(newTeamData.password, 10);
        return newTeamData;
        },
        beforeUpdate: async (updatedTeamData) => {
        updatedTeamData.password = await bcrypt.hash(updatedTeamData.password, 10);
        return updatedTeamData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;

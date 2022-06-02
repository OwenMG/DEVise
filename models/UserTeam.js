const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserTeam extends Model {}

UserTeam.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_team',
  }
);

module.exports = UserTeam;

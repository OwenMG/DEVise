const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Kcard extends Model {}

Kcard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    kcard_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    member_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    column_id: {
      type: DataTypes.STRING,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'kcards',
  }
);

module.exports = Kcard;

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db.config");

class UserPrompts extends Model {}

UserPrompts.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM("TEXT", "AUDIO"),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "UserPrompts",
  }
);

module.exports = UserPrompts;

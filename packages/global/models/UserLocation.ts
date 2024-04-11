// src/models/UserLocation.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

class UserLocation extends Model {
  public latitude!: number;

  public longitude!: number;

  public requests!: number;
}

UserLocation.init(
  {
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    requests: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "UserLocation",
  }
);

export default UserLocation;

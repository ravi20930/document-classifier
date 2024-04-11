import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Group from "./Group";
import User from "./User";

interface UserGroupAttributes {
  id: string;
  groupId: string;
  userId: string;
}

class UserGroup
  extends Model<UserGroupAttributes>
  implements UserGroupAttributes
{
  public id!: string;

  public groupId!: string;

  public userId!: string;

  public readonly group?: Group;
}

UserGroup.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Group,
        key: "id", // References the id column of the Group model
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id", // References the id column of the User model
      },
    },
  },
  {
    sequelize,
    modelName: "UserGroup",
  }
);

export default UserGroup;

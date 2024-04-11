import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "../config/database";
import UserGroup from "./UserGroup";

interface GroupAttributes {
  id: string;
  name: string;
}

class Group extends Model<GroupAttributes> implements GroupAttributes {
  public id!: string;

  public name!: string;

  public readonly groupUser?: UserGroup;
}

Group.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Group",
  }
);

export default Group;

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
// import User from "./User";

interface UserPromptsAttributes {
  id?: number;
  // userId: string;
  type: "TEXT" | "AUDIO";
  value: string;
  response?: string;
}

class UserPrompts
  extends Model<UserPromptsAttributes>
  implements UserPromptsAttributes
{
  public id!: number;

  // public userId!: string;

  public type!: "TEXT" | "AUDIO";

  public value!: string;

  public response!: string;
}

UserPrompts.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    // userId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   references: {
    //     model: User,
    //     key: "id",
    //   },
    // },
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

export default UserPrompts;

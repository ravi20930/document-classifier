import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "../config/database";
import UserGroup from "./UserGroup";

interface UserAttributes {
  id?: string;
  username?: string | null;
  sex?: number | null;
  phone?: string | null;
  email?: string;
  city?: string | null;
  googleId: string | null;
  orgEmail?: string | null;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;

  public username!: string | null;

  public sex!: number | null;

  public phone!: string | null;

  public email!: string;

  public googleId!: string | null;

  public orgEmail!: string | null;

  public readonly userGroup?: UserGroup;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    orgEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;

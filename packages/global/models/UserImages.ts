import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

interface UserImagesAttributes {
  id?: number;
  userId: string;
  imageUrl: string;
  source?: string;
}

class UserImages
  extends Model<UserImagesAttributes>
  implements UserImagesAttributes
{
  public id!: number;

  public userId!: string;

  public imageUrl!: string;

  public source!: string;
}

UserImages.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "GALLERY",
    },
  },
  {
    sequelize,
    modelName: "UserImages",
  }
);

export default UserImages;

import User from "./User";
import UserGroup from "./UserGroup";
import Group from "./Group";
import UserLocation from "./UserLocation";
import UserPrompts from "./UserPrompts";
import UserImages from "./UserImages";

// model associations

Group.hasOne(UserGroup, { as: "groupUser", foreignKey: "groupId" });
UserGroup.belongsTo(Group, { as: "group", foreignKey: "groupId" });
User.hasOne(UserGroup, { as: "userGroup", foreignKey: "userId" });

// User.hasMany(UserPrompts, { foreignKey: "userId", as: "prompts" });
// UserPrompts.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasMany(UserImages, { foreignKey: "userId", as: "images" });
UserImages.belongsTo(User, { foreignKey: "userId", as: "user" });

export { User, UserGroup, Group, UserLocation, UserPrompts };

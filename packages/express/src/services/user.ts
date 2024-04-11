import { throwError } from "../../../global/utils/handler";
import { User, UserPrompts } from "../../../global/models";
import UserImages from "../../../global/models/UserImages";

export const uploadImage = async (userId: string, urls: string[]) => {
  await UserImages.bulkCreate(
    urls.map((imageUrl) => ({
      userId,
      imageUrl,
    }))
  );
};

export const findOrCreateByGoogleId = async (
  googleId: string,
  email: string
): Promise<User> => {
  let user = await User.findOne({ where: { googleId } });

  if (!user) {
    user = User.build({
      googleId,
      email,
    });
    await user.save();
  }

  return user;
};

export const profile = async (userId: string) => {
  return User.findByPk(userId);
};

export const addPrompt = async (topic: string) => {
  const userP = UserPrompts.build({
    value: topic,
    type: "TEXT",
  });
  await userP.save();
  return userP.id;
};

export const updatePrompt = async (pId: number, response: string) => {
  const userPrompt = await UserPrompts.findByPk(pId);
  if (userPrompt) {
    userPrompt.response = response;
    await userPrompt.save();
  } else throwError(404, "Prompt not found");
};

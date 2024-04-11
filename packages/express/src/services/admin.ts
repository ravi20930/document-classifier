import { Op } from "sequelize";
import { User, UserGroup, Group } from "../../../global/models";
import { getPagination, getPagingData } from "../../../global/utils/pagination";
import { generateToken } from "../../../global/utils/auth";
import { throwError } from "../../../global/utils/handler";

interface RequestQuery {
  fromDate?: string;
  toDate?: string;
  page?: number;
  size?: number;
  sortbyDate?: boolean;
  order?: string;
  userId?: string;
}

/**
 *
 */
export const users = async (reqQuery: RequestQuery) => {
  const { fromDate, toDate, page, size, sortbyDate, order, userId } = reqQuery;
  const { limit, offset } = getPagination(page || 0, size || 10);

  const mFromDate = fromDate ? `${fromDate} 00:00:00` : undefined;
  const mToDate = toDate ? `${toDate} 23:59:59` : undefined;

  const query: any = {};
  let whereCondition: any = {};

  if (fromDate) {
    whereCondition.createdAt = {
      [Op.gt]: mFromDate,
    };
  }
  if (toDate) {
    whereCondition.createdAt = {
      [Op.lt]: mToDate,
    };
  }
  if (fromDate && toDate) {
    whereCondition.createdAt = {
      [Op.lt]: mToDate,
      [Op.gt]: mFromDate,
    };
  }

  if (sortbyDate && order) {
    query.order = [["createdAt", order]];
  }
  if (whereCondition) {
    query.where = whereCondition;
  }

  if (userId) {
    whereCondition = { id: userId };
  }

  query.where = whereCondition;
  query.limit = limit;
  query.offset = offset;
  query.attributes = ["id", "username", "email", "phone"];

  const user = await User.findAndCountAll(query);

  if (!user) {
    return 404;
  }
  const response = getPagingData(user, page || 0, limit);
  return response;
};

/**
 *
 */
export const createNewAdmin = async (userId: string) => {
  const group = await Group.findOne({
    where: { name: "ADMIN" },
    attributes: ["id"],
  });

  if (group !== null) {
    const { id } = group;
    await UserGroup.findOrCreate({
      where: { groupId: id, userId }, // Fixed the order of properties
    });
  }
  throwError(404, "Group not found.");
};

/**
 *
 */
export const getAnyUserToken = async (userId: string) => {
  const user = await User.findOne({
    where: { id: userId },
    attributes: ["id", "email"],
  });
  if (!user) {
    throwError(404, "User not found.");
  }
  return generateToken(user!, ""); // Add null assertion operator (!) to indicate that user is not null.
};

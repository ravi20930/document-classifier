let defaultPageSize: number = 20;

/**
 *
 */
export const setDefaultPageSize = (size: number) => {
  defaultPageSize = size;
};

/**
 *
 */
export const getPagination = (page: number, size: number) => {
  const limit: number = size ? +size : defaultPageSize;
  const offset: number = page ? page * limit : 0;
  return { limit, offset };
};

/**
 *
 */
export const getPagingData = (data: any, page: number, limit: number) => {
  const { count: totalItems, rows: assets } = data;
  const currentPage: number = page ? +page : 0;
  const totalPages: number = Math.ceil(totalItems / limit);
  return { limit, totalPages, currentPage, totalItems, assets };
};

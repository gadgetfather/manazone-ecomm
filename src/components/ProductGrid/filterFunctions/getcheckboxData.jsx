export const getcheckboxData = (
  data,
  categoryAction,
  categoryRPG,
  categorySports
) => {
  if (
    categoryAction === false &&
    categorySports === false &&
    categoryRPG === false
  ) {
    return data;
  }
  {
    const a = data.filter((item) =>
      categoryAction ? item.categoryName === "action" : false
    );
    const b = data.filter((item) =>
      categorySports ? item.categoryName === "sports" : false
    );
    const c = data.filter((item) =>
      categoryRPG ? item.categoryName === "RPG" : false
    );
    return [...a, ...b, ...c];
  }
};

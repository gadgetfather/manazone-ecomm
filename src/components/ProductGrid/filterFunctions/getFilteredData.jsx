export const getFilteredData = (sortedData, Rating) => {
  if (Rating === "ONE_STAR") {
    return sortedData.filter((item) => item.stars >= 1);
  }
  if (Rating === "TWO_STAR") {
    return sortedData.filter((item) => item.stars >= 2);
  }
  if (Rating === "THREE_STAR") {
    return sortedData.filter((item) => item.stars >= 3);
  }
  if (Rating === "FOUR_STAR") {
    return sortedData.filter((item) => item.stars >= 4);
  }

  return sortedData;
};

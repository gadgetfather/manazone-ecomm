export const getsliderData = (data, sliderValue) => {
  return data.filter((item) => item.price <= sliderValue);
};

type MenuItemType = {
  id: string,
  name: string,
  price: number,
  type: string,
  imageResource?: number | ImageUri,
};

type ImageUri = {
  uri: string,
};

export {MenuItemType};

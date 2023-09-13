export type Creator = {
  id: string;
  email: string;
  productsAmount: number;
  mostRecentCreateTime: string;
};

export type Product = {
  id: string;
  creatorId: string;
  createTime: string;
};

export type Data = {
  creators: Creator[];
  products: Product[];
};

interface Brand {
  name: string;
  originCountry?: string;
}

interface Color {
  name: string;
  hexCode: string;
}

interface Tag {
  name: string;
  type?: string;
}

export interface ProductType {
  _id: string;
  name: string;
  longDescription: string;
  shortDescription: string;
  price: number;
  stock: number;
  category: string[];
  image: string;
  brand?: Brand[];
  color?: Color[];
  tags?: Tag[];
  offer: number;
}

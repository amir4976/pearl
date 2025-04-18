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

export interface userType {
  _id:string;
  userName :string;
  name:string;
  lastName:string;
  email:string;
  password:string;
  address:[],
  favorites:[]
  role:string;
  refreshToken:string;
}


export interface BasketItem {
  id: string;
  image: string;
  price: number;
  quantity: number;
  name: string;
}


export interface CommentType {
  _id:string;
  name:string;
  email:string;
  product:ProductType;
  isAccsepted:boolean;
  comment:string;
  rate:number;
  date:string;
  createdAt:string;
  updatedAt:string;
  __v:number;

}


export interface IFormInput {
  firstName: string; // نام
  lastName: string; // نام خانوادگی
  email: string; // ایمیل
  streetAdress: string; // آدرس خیابان
  companyName?: string; // نام شرکت (اختیاری)
  departemanAdress?: string; // آدرس دپارتمان (اختیاری)
  city: string; // شهر
  postCode: string; // کد پستی
  phone: string; // شماره تلفن
  
}

import ConnectToDb from "@/utils/ConnectToDb";

const mongoose = require("mongoose");
import product from "@/models/product";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

interface Product {
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

interface DecodedToken {
  id: string;
  role: string;
  iat: number;
}
const GET = async (req) => {
  ConnectToDb();
  const allProducts = await product.find();
  return Response.json(allProducts);
};

 const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    // دریافت کوکی از درخواست
    const cookieHeader = req.headers.get("cookie");
    if (!cookieHeader) {
      return NextResponse.json(
        { message: "کوکی یافت نشد. لطفاً وارد شوید." },
        { status: 401 }
      );
    }

    // پیدا کردن توکن در کوکی
    const token = cookieHeader
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (!token) {
      return NextResponse.json(
        { message: "توکن یافت نشد. لطفاً وارد شوید." },
        { status: 401 }
      );
    }

    // بررسی اعتبار توکن
    let decodedToken: DecodedToken;
    try {
      decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedToken;
    } catch (err) {
        console.log(err)
      return NextResponse.json(
        { message: "توکن نامعتبر است." },
        { status: 403 }
      );
    }

    // بررسی نقش کاربر (باید ادمین باشد)
    if (decodedToken.role !== "admin") {
      return NextResponse.json(
        { message: "دسترسی غیرمجاز. فقط ادمین‌ها اجازه این عملیات را دارند." },
        { status: 403 }
      );
    }

    // دریافت داده‌های درخواست و تعیین نوع آن
    const body: Product = await req.json();
    const {
      name,
      longDescription,
      shortDescription,
      price,
      stock,
      category,
      image,
      brand,
      color,
      tags,
      offer,
    } = body;

    // بررسی فیلدهای ضروری
    const requiredFields: (keyof Product)[] = [
      "name",
      "longDescription",
      "shortDescription",
      "price",
      "stock",
      "category",
      "image",
      "offer",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `فیلد ${field} الزامی است.` },
          { status: 400 }
        );
      }
    }

    // بررسی نوع داده‌ها
    if (typeof name !== "string" || name.length < 3)
      return NextResponse.json(
        { message: "نام محصول باید حداقل ۳ کاراکتر باشد." },
        { status: 400 }
      );
    if (typeof longDescription !== "string" || longDescription.length < 10)
      return NextResponse.json(
        { message: "توضیحات طولانی باید حداقل ۱۰ کاراکتر باشد." },
        { status: 400 }
      );
    if (typeof shortDescription !== "string" || shortDescription.length < 5)
      return NextResponse.json(
        { message: "توضیحات کوتاه باید حداقل ۵ کاراکتر باشد." },
        { status: 400 }
      );
    if (typeof price !== "number" || price <= 0)
      return NextResponse.json(
        { message: "قیمت باید یک عدد مثبت باشد." },
        { status: 400 }
      );
    if (typeof stock !== "number" || stock < 0)
      return NextResponse.json(
        { message: "موجودی نباید منفی باشد." },
        { status: 400 }
      );
    if (!Array.isArray(category) || category.length === 0)
      return NextResponse.json(
        { message: "دسته‌بندی باید یک آرایه و حداقل دارای یک مقدار باشد." },
        { status: 400 }
      );
    if (typeof image !== "string" || !image.startsWith("http"))
      return NextResponse.json(
        { message: "لینک تصویر نامعتبر است." },
        { status: 400 }
      );
    if (typeof offer !== "number" || offer < 0 || offer > 100)
      return NextResponse.json(
        { message: "تخفیف باید بین ۰ تا ۱۰۰ باشد." },
        { status: 400 }
      );

    // بررسی آرایه `brand`
    if (brand) {
      if (!Array.isArray(brand))
        return NextResponse.json(
          { message: "برند باید یک آرایه باشد." },
          { status: 400 }
        );
      for (let b of brand) {
        if (typeof b.name !== "string" || !b.name.trim())
          return NextResponse.json(
            { message: "نام برند معتبر نیست." },
            { status: 400 }
          );
        if (b.originCountry && typeof b.originCountry !== "string")
          return NextResponse.json(
            { message: "کشور برند باید یک رشته باشد." },
            { status: 400 }
          );
      }
    }

    // بررسی آرایه `color`
    if (color) {
      if (!Array.isArray(color))
        return NextResponse.json(
          { message: "رنگ باید یک آرایه باشد." },
          { status: 400 }
        );
      for (let c of color) {
        if (typeof c.name !== "string" || !c.name.trim())
          return NextResponse.json(
            { message: "نام رنگ معتبر نیست." },
            { status: 400 }
          );
        if (
          typeof c.hexCode !== "string" ||
          !/^#([0-9A-F]{3}){1,2}$/i.test(c.hexCode)
        )
          return NextResponse.json(
            { message: "کد رنگ باید یک مقدار HEX معتبر باشد." },
            { status: 400 }
          );
      }
    }

    // بررسی آرایه `tags`
    if (tags) {
      if (!Array.isArray(tags))
        return NextResponse.json(
          { message: "تگ‌ها باید یک آرایه باشند." },
          { status: 400 }
        );
      for (let t of tags) {
        if (typeof t.name !== "string" || !t.name.trim())
          return NextResponse.json(
            { message: "نام تگ معتبر نیست." },
            { status: 400 }
          );
        if (t.type && typeof t.type !== "string")
          return NextResponse.json(
            { message: "نوع تگ باید یک رشته باشد." },
            { status: 400 }
          );
      }
    }

    // اگر همه چیز اوکی بود، محصول را ذخیره کن (در اینجا فقط یک پاسخ می‌فرستیم)
    return NextResponse.json(
      { message: "محصول با موفقیت اضافه شد.", data: body },
      { status: 201 }
    );
  } catch (error) {
    console.error("خطای سرور:", error);
    return NextResponse.json(
      { message: "خطای سرور رخ داده است." },
      { status: 500 }
    );
  }
};

export { GET, POST };

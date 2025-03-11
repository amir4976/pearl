import ConnectToDb from "@/utils/ConnectToDb";
import bcrypt from "bcrypt";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
export const POST = async (req:NextRequest) => {
  ConnectToDb();
  try {
    const { adentifire, password } = await req.json();
    console.log('first')

    const secret = process.env.JWT_SECRET || "default_secret";
  
    const user = await User.findOne({
      $or: [{ email: adentifire}, { userName: adentifire }],
    });
    
    console.log(user)
    if (!user) {
      return Response.json("کاربری با این مشخصات یافت نشد", { status: 400 });
    }
    console.log('first')
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('sac')
    if (!isPasswordValid) {
      return Response.json("رمز عبور اشتباه است", { status: 400 });
    }
    const userToken = jwt.sign({ email: user.email }, secret, {
      expiresIn: "1d",
    });

    return Response.json("success", {
      status: 200,
      headers: {
        "Set-Cookie": `token=${userToken}; HttpOnly; Path=/; Max-Age=86400;`,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json("خطایی رخ داده است", { status: 500 });
  }
};

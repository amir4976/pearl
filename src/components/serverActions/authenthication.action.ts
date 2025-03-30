import User from "@/models/User";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function authenthication() {
  const token = cookies().get("token")?.value;
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  if (!token) {
    redirect("/");
  }
  const isValidToken = jwt.verify(token, secret) as JwtPayload;

  if (!isValidToken.email) {
    redirect("/");
  }
  const findUser = await User.findOne({ email: isValidToken.email });
  if (!findUser) {
    redirect("/");
  }
  if (findUser.role !== "ADMIN") {
    redirect("/");
  }
}

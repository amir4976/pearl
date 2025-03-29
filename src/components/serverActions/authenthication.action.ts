import User from "@/models/User";
import jwt,{JwtPayload} from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function authenthication() {
  const token = cookies().get("token")?.value;

  const isValidToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

  if (!isValidToken.email) {
    redirect('/')
  }
  const findUser =await User.findOne({email:isValidToken.email})
  if(!findUser){
    redirect('/')
  }
  if(findUser.role !== "ADMIN"){
    redirect('/')
  }
}
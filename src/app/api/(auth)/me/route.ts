import ConnectToDb from "@/utils/ConnectToDb";
import { cookies } from "next/headers";
import jwt,{JwtPayload} from "jsonwebtoken";
import User from "@/models/User";
export const GET = async (req: Request) => {
  await ConnectToDb();
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const isValidToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

  if (!isValidToken.email) {
    return new Response("Unauthorized", { status: 401 });
  }
  console.log('call ')
  const user = await User.findOne({ email: isValidToken.email },'name email userName');
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  return new Response(JSON.stringify(user), { status: 200 });
}

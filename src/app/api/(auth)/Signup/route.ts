import ConnectToDb from "@/utils/ConnectToDb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
  await ConnectToDb();
  const { userName, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!userName || !email || !password) {
    return Response.json("لطفا همه فیلد ها را پر کنید", { status: 400 });
  }

  if (await User.findOne({ email })) {
    return Response.json("این ایمیل قبلا ثبت شده است", { status: 400 });
  }
  
  const userToken = jwt.sign(
    { userName, email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  return Response.json("datas", {
    status: 201,
    headers: {
      "Set-Cookie": `token=${userToken}; HttpOnly; Path=/; Max-Age=86400;`,
    },
  });
};

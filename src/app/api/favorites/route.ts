import ConnectToDb from "@/utils/ConnectToDb";
import Favorites from "@/models/Favorites";
import { authUser } from "@/utils/AuthUser";

export const GET = async () => {
  ConnectToDb();
  try {
    const user = await authUser();
    if (!user) {
      return new Response(JSON.stringify("user not found"), { status: 400 });
    }

    const favorites = await Favorites.find({user:user._id},'product').populate('product');
    console.log(favorites)
    return new Response(JSON.stringify(favorites), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (req:Request) => {
  ConnectToDb();
  try {
    const user = await authUser();

    if (!user) {
      return new Response(JSON.stringify("user not found"), { status: 400 });
    }

    const body = await req.json();
    const FaverExist = await Favorites.findOne({
      user: user._id,
      product: body.productID,
    });
    if (FaverExist) {
      return new Response(
        JSON.stringify({ massage: "this product already added" }),
        { status: 400 }
      );
    }
     await Favorites.create({
      user: user._id,
      product: body.productID,
    });

    return new Response(
      JSON.stringify({ massage: "your product added to your favorites" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ massage: "pleas check params", error }),
      { status: 500 }
    );
  }
};

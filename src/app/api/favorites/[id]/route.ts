import ConnectToDb from "@/utils/ConnectToDb";
import Favorites from "@/models/Favorites";
import { authUser } from "@/utils/AuthUser";

// get by porduct id

export const GET = async (req: Request, params: { params: { id: string } }) => {
  ConnectToDb();
  try {
    const productID = params.params.id;
    // get id from here
    const user = await authUser();
    const favorites = await Favorites.find({
      product: productID,
      user: user._id,
    })
      .populate("user")
      .populate("product")
      .lean();
    if (favorites.length === 0) {
      return new Response(JSON.stringify("not found"), { status: 400 });
    }
    return new Response(JSON.stringify(favorites), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

// delete using product id
export const DELETE = async (
  req: Request,
  params: { params: { id: string } }
) => {
  ConnectToDb();
  try {
    const productID = params.params.id;
    // get id from here
    console.log(productID);
    const isInFavorites = await Favorites.findOne({
      _id: productID,
    });

    if (!isInFavorites) {
      return new Response(JSON.stringify("not found"), { status: 400 });
    }

    await Favorites.findOneAndDelete({
      _id: productID,
    });

    return new Response(JSON.stringify("deleted"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

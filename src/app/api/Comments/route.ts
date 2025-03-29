import Comments from "@/models/Comments";
import mongoose from "mongoose";
import product from "@/models/product";
export const GET = async () => {
  try {
    const comments = await Comments.find().populate("product");
    return Response.json({ comments }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return Response.json({ message: "error" }, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    // getting info from client
    const { name, email, comment, rate, productId } = await request.json();
    
    // check if the product is exist
    const isProduct = await product.findOne({
      _id: new mongoose.Types.ObjectId(productId),
    });

    // check if the product is exist 
    if (!isProduct) {
      return Response.json(
        { message: "this product is not  found" },
        { status: 400 }
      );
    }

    // check if the fildes is empty
    if (!name || !email || !comment || !rate) {
      return Response.json(
        { message: "error pleas full the fildes" },
        { status: 400 }
      );
    }


   const newComment = await Comments.create({
      name,
      email,
      comment,
      rate,
      product: isProduct._id,
    });


   

  const update =  await product.findOneAndUpdate(
    { _id: isProduct._id },
    { $push: { Comments: newComment._id } }, // مستقیماً آی‌دی را اضافه کن
    { new: true } // تا مقدار جدید را برگرداند
  );
    console.log(update)
    return Response.json({ message: "success" }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error);
    return Response.json({ message: "error" }, { status: 500 });
  }
};

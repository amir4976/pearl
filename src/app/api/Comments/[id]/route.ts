import ConnectToDb from "@/utils/ConnectToDb";
import Comments from "@/models/Comments";

export const GET = async (req: Request, params: { params: { id: string } }) => {
  ConnectToDb();
  console.log(params);
  const comments = await Comments.find({
    product: params.params.id,
    isAccsepted: true,
  }).lean();
  console.log(comments);
  return Response.json({ comments }, { status: 200 });
};


export const PUT = async (req: Request, params: { params: { id: string } }) => {
  ConnectToDb();
  const findComment = await Comments.findById(params.params.id);
  const comments = await Comments.findByIdAndUpdate(params.params.id, {
    isAccsepted: !findComment.isAccsepted,
  });
  return Response.json({ comments }, { status: 200 });
};


export const DELETE = async (req: Request, params: { params: { id: string } }) => {
  ConnectToDb();
  const comments = await Comments.findByIdAndDelete(params.params.id);
  return Response.json({ comments }, { status: 200 });
};
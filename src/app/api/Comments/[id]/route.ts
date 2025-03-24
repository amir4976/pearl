import ConnectToDb from "@/utils/ConnectToDb";
import Comments from "@/models/Comments";

export const GET = async (req:Request, params :{id:string}) => {
  ConnectToDb();
  const comments = await Comments.find({ product: params.params.id ,isAccsepted:true}).lean();
  console.log(comments);
  return Response.json({ comments }, { status: 200 });
};

import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    isAccsepted: {
      type: Boolean,
      default: false,
    },
  },{ timestamps: true }
);

export default mongoose.models.Comments ||
  mongoose.model("Comments", CommentsSchema);

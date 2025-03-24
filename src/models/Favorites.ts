import mongoose from "mongoose";



const FavoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  
});

export default mongoose.models.Favorite || mongoose.model("Favorite", FavoriteSchema);

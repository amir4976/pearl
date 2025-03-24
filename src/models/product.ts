const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: [String],
    required: true,
    default: [],
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: [
      {
        name: { type: String, required: true }, // نام برند
        originCountry: { type: String, default: "Unknown" }, // کشور سازنده
      },
    ],
    default: [],
  },
  color: {
    type: [
      {
        name: { type: String, required: true }, // نام رنگ (مثلاً "قرمز")
        hexCode: { type: String, required: true }, // کد رنگ (مثلاً "#FF0000")
      },
    ],
    default: [],
  },
  tags: {
    type: [
      {
        name: { type: String, required: true }, // نام تگ (مثلاً "پر فروش")
        type: { type: String, default: "general" }, // نوع تگ (مثلاً "ویژه"، "مناسبتی" و ...)
      },
    ],
    default: [],
  },
  offer: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  Comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

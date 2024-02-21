import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      minLength: [1, "minLength 6 characters"],
      maxLength: [255, "maxLength 255 characters"],
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    ingrdients: { type: String },
    price: { type: Number, default: 0 },
    image: { type: String },
  },
  { timestamps: true }
);
export const Product =
  mongoose.models.Product || mongoose.model("Product", schema);

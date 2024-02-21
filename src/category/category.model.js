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
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        default: [],
      },
    ],
    image: { type: String },
    price: { type: Number, default: 0 },
  },
  { timestamps: true }
);
export const Category =
  mongoose.models.Category || mongoose.model("Category", schema);

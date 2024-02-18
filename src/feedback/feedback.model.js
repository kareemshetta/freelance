import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    satisficationTasteAndQualityQuestion: {
      type: String,
    },
    satisficationDelivaryQuestion: String,
    satisficationOverallExperienceQuestion: { type: Number, max: 5, min: 1 },
    receiveMenuQuestion: String,
  },
  { timestamps: true }
);
export const Feedback =
  mongoose.models.Messages || mongoose.model("feedback", schema);

import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    satisficationTasteAndQualityQuestion: { type: Number, max: 5, min: 0 },
    satisficationDelivaryQuestion: { type: Number, max: 5, min: 0 },
    satisficationOverallExperienceQuestion: { type: Number, max: 5, min: 0 },
    receiveMenuQuestion: { type: String },
  },
  { timestamps: true }
);
export const Feedback =
  mongoose.models.Messages || mongoose.model("feedback", schema);

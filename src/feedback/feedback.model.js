import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    satisficationTasteAndQualityQuestion: { type: Number, max: 5, min: 1 },
    satisficationDelivaryQuestion: { type: Number, max: 5, min: 1 },
    satisficationOverallExperienceQuestion: { type: Number, max: 5, min: 1 },
    receiveMenuQuestion: { type: Number, max: 12, min: 1 },
  },
  { timestamps: true }
);
export const Feedback =
  mongoose.models.Messages || mongoose.model("feedback", schema);

import { Feedback } from "./feedback.model.js";
import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";

export const getAllFeedback = catchError(async (request, response, next) => {
  const subscripers = await Feedback.find({});
  if (subscripers.length == 0) {
    throw ErrorMessage(404, "no feedback found");
  }
  response.status(200).json(subscripers);
});

export const addNewFeedback = catchError(async (request, response, next) => {
  let result = new Feedback(request.body);
  result = await result.save();
  if (result) {
    return response.status(201).json({
      message: "Add  Successfully 😃",
      result,
    });

    // console.error(err.response.body.errors);
    // console.log(err);
  } else {
    throw new ErrorMessage(
      400,
      "mo feedback doesn't created check data you provide"
    );
  }
});

import { Category } from "./category.model.js";
import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
// import sendEmail, { getStyleHtml } from "../utils/email.js";
export const getAllCategories = catchError(async (request, response, next) => {
  const categories = await Category.find({});
  if (categories.length == 0) {
    throw ErrorMessage(404, "no feedback found");
  }
  response.status(200).json(categories);
});

export const addNewCategory = catchError(async (request, response, next) => {
  console.log(request.body);
  let result = new Category(request.body);
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

import { Category } from "./category.model.js";
import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
import { deleteOne } from "../utils/factory.js";
// import sendEmail, { getStyleHtml } from "../utils/email.js";
export const getAllCategories = catchError(async (request, response, next) => {
  const categories = await Category.find({}).populate({ path: "items" });
  if (categories.length == 0) {
    throw ErrorMessage(404, "no category found");
  }
  //looooooo
  response.status(200).json({
    pizzaClassic: categories[0],
    pizzaPremium: categories[1],
    pasta: categories[2],
    specialDish: categories[3],
    salad: categories[4],
    sides: categories[5],
    beverages: categories[6],
  });
});

export const addNewCategory = catchError(async (request, response, next) => {
  const { name } = request.body;
  if (await Category.findOne({ name })) {
    throw ErrorMessage(409, "Category Already Exist 🙄");
  }

  if (request.file) {
    request.body.image = request.file.dest;
  }
  const user = await new Category(request.body).save();
  if (!user) {
    throw ErrorMessage(404, "No Category Added Check Your Data 🙄");
  }
  response.status(201).json({ message: " category added successfully" });
});

export const getSingleCategory = catchError(async (request, response, next) => {
  let { id } = request.params;
  let result = await Category.findById(id);
  if (!result) {
    return next(ErrorMessage(404, `Item Not Found 😥`));
  }
  response.status(200).json({
    message: "Done 😃",
    result,
  });
});

export const deleteSingleCategory = deleteOne(Category);

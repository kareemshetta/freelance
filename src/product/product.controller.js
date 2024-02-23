import { Product } from "./product.model.js";
import { ErrorMessage } from "../utils/ErrorMessage.js";
import { catchError } from "../utils/catchAsyncError.js";
import { deleteOne } from "../utils/factory.js";
import { Category } from "../category/category.model.js";
import { ApiFeature } from "../utils/ApiFeature.js";
// import sendEmail, { getStyleHtml } from "../utils/email.js";
export const getAllProducts = catchError(async (request, response, next) => {
  const apiFeature = new ApiFeature(Product.find({}), request.query).search();
  const categories = await apiFeature.mongooseQuery;
  // if (categories.length == 0) {
  //   throw ErrorMessage(404, "no category found");
  // }
  response.status(200).json(categories);
});

export const addNewProduct = catchError(async (request, response, next) => {
  const { name, category } = request.body;
  if (await Product.findOne({ name })) {
    throw ErrorMessage(409, "Product Already Exist 🙄");
  }

  const searchedCategory = await Category.findOne({ _id: category });
  if (!searchedCategory) {
    throw ErrorMessage(404, "category doesn't exist");
  }

  //   const order = await OrdersModel.create(request.body);

  if (request.file) {
    request.body.image = request.file.dest;
  }
  const product = await new Product(request.body).save();
  if (!product) {
    throw ErrorMessage(404, "No Product Added Check Your Data 🙄");
  }
  console.log(product);

  const updatedCategory = await Category.findByIdAndUpdate(
    category,
    { $addToSet: { items: product._id } },
    { new: true }
  );
  response.status(201).json({ message: "product added successfully" });
});

export const getSingleProduct = catchError(async (request, response, next) => {
  let { id } = request.params;
  let result = await Product.findById(id).populate({ path: "category" });
  if (!result) {
    return next(ErrorMessage(404, `Item Not Found 😥`));
  }
  response.status(200).json({
    message: "Done 😃",
    result,
  });
});

export const updateSingleProduct = catchError(
  async (request, response, next) => {
    let { id } = request.params;
    if (request.file) {
      request.body.image = request.file.dest;
    }
    console.log("body", request.body);
    let result = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (!result) {
      return next(ErrorMessage(404, `Item Not Found 😥`));
    }
    response.status(200).json({
      message: "Done 😃",
      result,
    });
  }
);
export const updateMany = catchError(async (request, response, next) => {
  console.log("hiii");
  await Product.updateMany(
    {},
    { $set: { image: "uploads/products/Dau_zJsl9KiYWjAaLOC4p_pizaa.jpg" } }
  );
  response.status(200).json({
    message: "Done 😃",
  });
});
export const deleteSingleProduct = deleteOne(Product);

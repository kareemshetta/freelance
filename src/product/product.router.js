import { Router } from "express";
import { fileUpload, fileValidation } from "../utils/multer.js";

import * as controller from "./product.controller.js";

import * as validator from "./product.validation.js";
import { validation } from "../middleware/validation.js";

const router = Router();

router
  .route("/")
  .get(controller.getAllProducts)
  .post(
    fileUpload("products", fileValidation.image).single("image"),
    validation(validator.createProduct),
    controller.addNewProduct
  );
router
  .route("/:id")
  .get(validation(validator.findSingleProduct), controller.getSingleProduct)
  .delete(
    validation(validator.findSingleCategory),
    controller.deleteSingleProduct
  );
export default router;

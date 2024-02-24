import { Router } from "express";
import { fileUpload, fileValidation } from "../utils/multer.js";

import * as controller from "./product.controller.js";

import * as validator from "./product.validation.js";
import { validation } from "../middleware/validation.js";
import authorizedTo from "../middleware/auth.js";
const router = Router();

router.route("/").get(controller.getAllProducts).post(
  // authorizedTo,
  fileUpload("products", fileValidation.image).single("image"),
  validation(validator.createProduct),
  controller.addNewProduct
);

router.route("/addMany").get(authorizedTo, controller.updateMany);
router
  .route("/:id")
  .get(validation(validator.findSingleProduct), controller.getSingleProduct)
  .delete(
    authorizedTo,
    validation(validator.findSingleCategory),
    controller.deleteSingleProduct
  )
  .put(
    authorizedTo,
    fileUpload("products", fileValidation.image).single("image"),
    validation(validator.updateProduct),
    controller.updateSingleProduct
  );

export default router;

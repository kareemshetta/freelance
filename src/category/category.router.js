import { Router } from "express";
import { fileUpload, fileValidation } from "../utils/multer.js";

import * as controller from "./category.controller.js";
import authorizedTo from "../middleware/auth.js";
import * as validator from "./category.validation.js";
import { validation } from "../middleware/validation.js";

const router = Router();

router
  .route("/")
  .get(controller.getAllCategories)
  .post(
    authorizedTo,
    fileUpload("categories", fileValidation.image).single("image"),
    validation(validator.createCategory),
    controller.addNewCategory
  );
router
  .route("/:id")
  .get(validation(validator.findSingleCategory), controller.getSingleCategory)
  .delete(
    authorizedTo,
    validation(validator.findSingleCategory),
    controller.deleteSingleCategory
  );
export default router;

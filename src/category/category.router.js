import { Router } from "express";
import { fileUpload, fileValidation } from "../utils/multer.js";

import * as controller from "./category.controller.js";

import * as validator from "./category.validation.js";
import { validation } from "../middleware/validation.js";

const router = Router();

router.route("/").get(controller.getAllCategories).post(
  fileUpload("categories", fileValidation.image).single("image"),
  // validation(validator.createFeedback),
  controller.addNewCategory
);

export default router;

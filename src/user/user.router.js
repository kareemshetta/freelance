import { Router } from "express";
// import { fileUpload, fileValidation } from "../utils/multer.js";

import * as authController from "./user.controller.js";

import * as validator from "./user.validation.js";
import { validation } from "../middleware/validation.js";
const router = Router();
router.post(
  "/signup",
  //   fileUpload("profilePic", fileValidation.image).single("image"),
  validation(validator.signUpSchema),
  authController.signUp
);

router.post(
  "/signin",
  validation(validator.signInSchema),
  authController.signIn
);

export default router;

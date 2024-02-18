import { Router } from "express";
import * as controller from "./feedback.controller.js";

import * as validator from "./feedback.validation.js";
import { validation } from "../middleware/validation.js";

const router = Router();

router
  .route("/")
  .get(controller.getAllFeedback)
  .post(validation(validator.createFeedback), controller.addNewFeedback);

export default router;

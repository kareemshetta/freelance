import { Router } from "express";
import * as controller from "./order.controller.js";

import * as validator from "./order.validation.js";
import { validation } from "../middleware/validation.js";

const router = Router();

router
  .route("/")

  .post(validation(validator.createComp), controller.addNewComp);

export default router;

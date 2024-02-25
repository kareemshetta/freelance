// import userRoute from "./user/userRoute.js";
import feedbackRoute from "./feedback/feedback.router.js";
//
import categoryRoute from "./category/category.router.js";
import productRoute from "./product/product.router.js";
import userRoute from "./user/user.router.js";
import orderRoute from "./order/order.router.js";
import { ErrorMessage } from "../src/utils/ErrorMessage.js";

export function allRoutes(app, express, server) {
  app.use(express.json({}));
  app.get("/", (req, res) => {
    res.send("welcome to feedback");
  });
  app.use("/feedback", feedbackRoute);
  app.use("/category", categoryRoute);
  app.use("/product", productRoute);
  app.use("/dashboard", userRoute);
  app.use("/complement", orderRoute);

  // app.use("/user", userRoute);

  //! Not Found Page
  //----------------------------------------------------------------------------------------------------------------------
  app.use((request, response, next) => {
    next(ErrorMessage(404, `Not found - ${request.originalUrl}`));
  });

  //! to catch any error
  app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({
      error: error.message,
      statusError: error.status,
    });
  });
}

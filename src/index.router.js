// import userRoute from "./user/userRoute.js";
import feedbackRoute from "./feedback/feedback.router.js";
//
import { ErrorMessage } from "../src/utils/ErrorMessage.js";

export function allRoutes(app, express, server) {
  app.use(express.json({}));
  app.get("/", (req, res) => {
    res.send("welcome to feedback");
  });
  app.use("/feedback", feedbackRoute);
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

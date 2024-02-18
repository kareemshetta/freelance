import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnectionAndServer = (app) => {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfully to DB");
      const expressServer = app.listen(process.env.PORT || 5000, () =>
        console.log(`Server listening on port ${process.env.PORT || 5000}`)
      );
    });
};

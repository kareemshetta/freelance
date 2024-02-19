import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cron from "node-cron";
import { dbConnectionAndServer } from "./dbAndServer/dbConnectionAndServer.js";
import { allRoutes } from "./src/index.router.js";

//set directory dirname
// const server = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "./config/.env") });
// dotenv.config();
// console.log("send grid key", process.env.SENDGRID_API_KEY);

const app = express();

// Use CORS with specified options
// app.use(cors(corsOptions));
app.use(cors());
//------------------------------------------------------webhook------------------------------------------------------
// app.use(helmet());
// // Create an instance of the rate limiter with desired options
// const limiter = rateLimit({
//   windowMs: 60 * 60 * 1000, // 60 minutes
//   max: 50000, // limit each IP to 500 requests per windowMs
// });

// // Apply the rate limiting middleware to all requests
// app.use(limiter);

// app.use(mongoSanitize());
// app.use(xss());
dbConnectionAndServer(app);

app.use(morgan("dev"));

app.use(express.json());
// //? route for accessing images on server
// app.use("/uploads", express.static(path.join(__dirname, "./src/uploads/")));

//? all route
allRoutes(app, express);
// export { io };
cron.schedule("*/10 * * * *", async () => {
  await axios.get("https://feedback-vgoq.onrender.com/");
});

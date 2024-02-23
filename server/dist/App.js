import express from "express";
import { errorMiddleware } from "./Middlewares/Error.js";
// import NodeCache from "node-cache";
import mongoose from "mongoose";
import Stripe from "stripe";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
// importing routes
import userRoute from "./Routes/User.js";
import productRoute from "./Routes/Product.js";
import orderRoute from "./Routes/Order.js";
import dashboardRoute from "./Routes/Stats.js";
config({
    path: "./.env",
});
const port = 4000;
const stripeKey = process.env.STRIPE_KEY || "";
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
// export const myCache = new NodeCache();
export const stripe = new Stripe(stripeKey);
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);
app.use("/uploads", express.static("Uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is running on Http://localhost:${port}`);
});

import express from "express";
import { errorMiddleware } from "./Middlewares/Error.js";
import NodeCache from "node-cache";

// importing routes
import userRoute from "./Routes/User.js";
import productRoute from "./Routes/Product.js";
import orderRoute from "./Routes/Order.js";
import mongoose from "mongoose";

const port = 4000;

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
connectDB();

export const myCache = new NodeCache();

// mongoose
//   .connect("mongodb://localhost:27017/ecommerce")
//   .then((c) => console.log(`DB connected to ${c.connection.host}`))
//   .catch((e) => console.log(e));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
// app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("Uploads"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is running on Http://localhost:${port}`);
});

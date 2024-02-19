import express from "express";
// importing routes
import userRoute from "./Routes/User.js";
import productRoute from "./Routes/Product.js";
import { connectDB } from "./Utils/Features.js";
import { errorMiddleware } from "./Middlewares/Error.js";
import NodeCache from "node-cache";
const port = 4000;
connectDB();
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is running on Http://localhost:${port}`);
});

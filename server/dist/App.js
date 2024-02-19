import express from "express";
// importing routes
import userRoute from "./Routes/User.js";
import { connectDB } from "./Utils/Features.js";
import { errorMiddleware } from "./Middlewares/Error.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is running on Http://localhost:${port}`);
});

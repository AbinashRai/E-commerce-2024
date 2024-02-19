import express from "express";
import { getAdminProducts, getAllProducts, getSingleProduct, getlatestProducts, } from "../Controllers/Product.js";
const app = express.Router();
//To get all Products with filters  - /api/v1/product/all
app.get("/all", getAllProducts);
//To get last 10 Products  - /api/v1/product/latest
app.get("/latest", getlatestProducts);
//To get all unique Categories  - /api/v1/product/categories
// app.get("/categories", getAllCategories);
//To get all Products   - /api/v1/product/admin-products
app.get("/admin-products", getAdminProducts);
// To get, update, delete Product
app.route("/:id").get(getSingleProduct);
export default app;

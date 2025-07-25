const express = require("express");
console.log(express)
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db/connectDB.js");
const app = express();
const userRoute = require("./Routes/userRoutes.js");
const productRoute = require("./Routes/productRoutes.js");
const adminroute = require("./Routes/adminroute.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const path = require("path"); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

dotenv.config();

const port = process.env.PORT || 4499;

connectDb();

app.use("/api/user/", userRoute);
app.use("/api/product/",  productRoute);
app.use("/api/admin/" ,adminroute);

app.use((err, req, res, next) => {
  console.log(err);
  res
  .status(404)
  .send({ success: false, message: err.message || "Route not found" });
});
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

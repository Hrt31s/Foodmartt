const {Router} = require ("express")
const multer = require("multer");
const path = require("path");
const upload = require("../Middlewares/upload");
const jwt = require("jsonwebtoken");
const {
  addproductcontroller,
    uploadImageController,
 updateProductController,
  deleteProductController,
  allproductcontroller,
  getproductcontroller,
  addToCartController,
  Popularcontroller,

reverseProductscontroller
 
} = require("../Controllers/productController.js");
const { update } = require("../Models/userModel.js");
const Product = require("../Models/productModel.js");
const User = require("../Models/userModel.js");
const checkAdmin = require("../Middlewares/checkadmin.js");
const verifyToken = require("../Middlewares/verifytoken.js");
const authMiddleware = require("../Middlewares/authmiddleware.js");
const { reverse } = require("dns");
// const { get } = require("http");

const router = Router();


router.post("/add", upload.single("img"), addproductcontroller);
// router.post("/image", upload.single("img"), uploadImageController);
router.delete("/deleteproduct/:id", deleteProductController);
router.put("/updateproduct/:id", authMiddleware, updateProductController);
router.get("/allproducts", allproductcontroller);
router.get ("/getproduct",getproductcontroller)
router.put("/image", upload.any('img',6), (req, res) => {
  // let data = req.files.map((img) => {
  //   return img.filename;
  // });
  res.send({
    success: true,
    message: "Images uploaded successfully",
    images: req.files,
  });
  });
router.post("/multiimage", upload.fields([{name: 'img', maxCount: 6},{name:"banner"}]), (req, res) => {
    res.json({images: req.files});
});
router.post("/addtocart", verifyToken, addToCartController);

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const totalProducts = await Product.countDocuments()

    res.json({ totalUsers, totalProducts })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})



router.get("/products", async (req, res) => {
  const category = req.query.category;

  try {
    // Match category case-insensitively
    const products = await Product.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });

    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/popular", Popularcontroller);  


router.get("/singleproduct/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json({ data: product });
});


router.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send({ message: "Query required" });

  try {
    const results = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    res.send({ data: results });
  } catch (err) {
    res.status(500).send({ message: "Search failed" });
  }
});
router.get ("/reverseproducts",reverseProductscontroller);




module.exports = router;


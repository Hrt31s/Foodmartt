const { Router } = require("express");
const path = require("path");
const multer = require("multer");

const upload = require("../Middlewares/upload.js");
const jwt = require("jsonwebtoken");
const {
  loginadminController,
  registeruserController
} = require("../Controllers/admincontroller.js");
const verifyToken = require("../Middlewares/verifytoken.js");
const fs = require("fs");
const router = Router();

router.post("/registeradmin", registeruserController);
router.get("/alladmin", alluserController);
router.post("/loginadmin", loginadminController);



module.exports = router;
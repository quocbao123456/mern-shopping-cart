const express = require("express");
const router = express.Router();
const verifySignUp = require("./../middlewares/verifySignUp");
const {
    sinUp,
    signin,
    forgotPassword,
    resetPassword,
} = require("../controller/auth.controller");

//@desc     GET all products from db
//@route    GET /api/products
//@access   Public
router.post("/signup", verifySignUp.checkDuplicateUsernameOrEmail, sinUp);
router.post("/signin", signin);

router.post("/forgotPassword", forgotPassword);

router.post("/resetPassword/:resetToken", resetPassword);

module.exports = router;

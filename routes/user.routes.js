const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/user.controller");
const { protect } = require("../middleware/authMiddleWare");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/me").get(protect, getMe);

module.exports = router;

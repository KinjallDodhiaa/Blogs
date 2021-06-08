const express = require("express");
const { validateInputs } = require("../middleware/validator");
const { postValidationRules } = require("../lib/validation/postRules");

//create a new router
const router = express.Router();
const {
  getPosts,
  addPosts,
  deletePost,
  updatePosts,
} = require("../controller/postsController");

router.route("/").get(getPosts).post(validateInputs(postValidationRules),addPosts);
router.route('/:id').delete(deletePost).put(validateInputs(postValidationRules),updatePosts);
// router.route('/update').post(updatePosts);










//export router to app.js
module.exports = router;

const express = require("express");
//create a new router
const router = express.Router();
const {
  getPosts,
  addPosts,
  deletePost,
  updatePosts,
} = require("../controller/postsController");

router.route("/").get(getPosts).post(addPosts);
router.route('/:id').delete(deletePost).put(updatePosts);
// router.route('/update').post(updatePosts);










//export router to app.js
module.exports = router;

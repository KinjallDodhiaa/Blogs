const { body } = require("express-validator");
exports.postValidationRules = [
  body("title")
    .notEmpty()
    .isLength({ min: 5, max: 200 })
    .withMessage(
      "Title is required. Its length should be minimum 5 characters and maximum 200"
    ),
  body("content")
    .notEmpty()
    .isLength({ min: 20, max: 5000 })
    .withMessage(
      "Content is required. Its length should be minimum 20 characters and maximum 5000"
    ),
  body("name").notEmpty().withMessage("Name is required"),
];
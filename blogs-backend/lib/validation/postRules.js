const { body } = require("express-validator");
exports.postValidationRules = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("name").notEmpty().withMessage("Name is required"),
];

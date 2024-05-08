const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const multer = require("../multer"); // Adjust the import statement
const upload = multer.upload;

const ErrorHandler = require("./utils/ErrorHandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
        return next(new ErrorHandler(`User already exists`, 400)); // Make sure to use 'new' keyword here
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename); // You might need to adjust how you construct the fileUrl

    const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,
    };

    console.log(user);
});

module.exports = router;

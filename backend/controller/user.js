const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const multer = require("../multer");
const upload = multer.upload;

const ErrorHandler = require("../utils/ErrorHandler");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            // If user exists, return response indicating that the user already exists
            return res.status(400).json({ message: "User already exists" });
        }

        // If user does not exist, proceed to create the user
        let avatarUrl = null;

        // Check if file is uploaded
        if (req.file) {
            avatarUrl = req.file.path;
        }

        // Create a new user object with avatar details
        const newUser = new User({
            name,
            email,
            password,
            avatar: {
                url: avatarUrl,
                public_id: req.file ? req.file.filename : null, // If using Cloudinary, you might save the public_id here
            },
        });

        // Save the user to the database
        await newUser.save();

        // Generate activation token
        const activationToken = createActivationToken(newUser);

        // Construct activation URL
        const activationUrl = `http://localhost:5173/activation/${activationToken}`;

        // Send activation email
        await sendActivationEmail(newUser.email, activationUrl);

        res.status(201).json({
            success: true,
            message: `User created successfully. Please check your email (${newUser.email}) to activate your account.`,
        });
    } catch (error) {
        next(new ErrorHandler(error.message, 400));
    }
});

// Function to create activation token
const createActivationToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
};

router.post("/activation", catchAsyncErrors(async(req,res,next) => {
    try {
        const { activation_token } = req.body;

        console.log("Activation token received:", activation_token); // Log the received activation token

        const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

        console.log("Decoded token:", newUser); // Log the decoded token content

        if (!newUser) {
            return next(new ErrorHandler("Invalid token", 400));
        }

        const { name, email, password, avatar } = newUser;

        let user = await User.findOne({ email });

        if (user) {
            return next(new ErrorHandler("User already exists", 400));
        }

        user = await User.create({
            name,
            email,
            password,
            avatar,
        });

        sendToken(user, 201, res);
    } catch(err) {
        console.error("Error occurred during activation:", err); // Log any errors that occur during activation
        return next(new ErrorHandler(error.message, 500));
    }
}));


// Function to send activation email
const sendActivationEmail = async (email, activationUrl) => {
    try {
        await sendMail({
            email: email,
            subject: "Activate Your Account",
            message: `Click the following link to activate your account: ${activationUrl}`,
        });
    } catch (error) {
        throw new Error("Failed to send activation email");
    }
};

module.exports = router;

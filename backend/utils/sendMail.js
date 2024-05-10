const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // Set to true for SSL port
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    
    

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

// // Test the sendMail function
// sendMail({
//     email: "tranquocnam1612@example.com", // Replace with your email address
//     subject: "Test Email",
//     message: "This is a test email.",
// });


module.exports = sendMail;